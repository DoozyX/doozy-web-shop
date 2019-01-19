import core from '@module/core-client-angular';
import look from '@module/look-client-angular';
import ClientModule from '@module/module-client-angular';

const modules = new ClientModule(core, look);

export default modules;
