const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');
const { pascalize } = require('humps');
const deleteMigrations = require('./subCommands/deleteMigrations');
const { computeModulesPath, runPrettier, deleteFromFileWithExports } = require('../helpers/util');

/**
 * Removes the module from client, server or both locations and removes the module from the module list.
 *
 * @param logger - The Logger.
 * @param moduleName - The name of a new module.
 * @param location - The location for a new module [client|server|both].
 */
function deleteModule(logger, moduleName, options, location) {
  logger.info(`Deleting ${location} files…`);

  // pascalize
  const Module = pascalize(moduleName);
  const modulePath = computeModulesPath(location, moduleName);
  const modulesPath = computeModulesPath(location);
  const moduleCommonPath = `${modulesPath}/common`;
  const generatedContainerFile = 'generatedContainers.js';
  const generatedContainerPath = `${moduleCommonPath}/${generatedContainerFile}`;
  const generatedSchemasFile = 'generatedSchemas.js';
  const generatedSchemaPath = `${moduleCommonPath}/${generatedSchemasFile}`;

  if (fs.existsSync(modulePath)) {
    // remove module directory
    shell.rm('-rf', modulePath);

    const modulesPath = computeModulesPath(location);

    // get index file path
    const indexFullFileName = fs.readdirSync(modulesPath).find(name => name.search(/index/) >= 0);
    const indexPath = modulesPath + indexFullFileName;
    let indexContent;

    try {
      indexContent = fs.readFileSync(indexPath);
    } catch (e) {
      logger.error(chalk.red(`Failed to read ${indexPath} file`));
      process.exit();
    }

    // extract application modules
    const appModuleRegExp = /Module\(([^()]+)\)/g;
    const [, appModules] = appModuleRegExp.exec(indexContent) || ['', ''];
    const appModulesWithoutDeleted = appModules.split(',').filter(appModule => appModule.trim() !== moduleName);

    const contentWithoutDeletedModule = indexContent
      .toString()
      // remove module from modules list
      .replace(appModuleRegExp, `Module(${appModulesWithoutDeleted.toString().trim()})`)
      // remove module import
      .replace(RegExp(`import ${moduleName} from './${moduleName}';\n`, 'g'), '');

    fs.writeFileSync(indexPath, contentWithoutDeletedModule);
    runPrettier(indexPath);

    // delete migrations and seeds if server location and option -m specified
    if (location === 'server' && options.m) {
      deleteMigrations(logger, moduleName);
    }

    if (fs.existsSync(generatedContainerPath)) {
      const graphqlQuery = `${Module}Query`;
      deleteFromFileWithExports(generatedContainerPath, graphqlQuery);
    }
    if (fs.existsSync(generatedSchemaPath)) {
      const schema = `${Module}Schema`;
      deleteFromFileWithExports(generatedSchemaPath, schema);
    }

    logger.info(chalk.green(`✔ Module for ${location} successfully deleted!`));
  } else {
    logger.info(chalk.red(`✘ Module ${location} location for ${modulePath} not found!`));
  }
}

module.exports = deleteModule;
