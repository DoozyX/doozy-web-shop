import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Button } from 'semantic-ui-react';

const getResults = () =>
  _.times(5, () => ({
    title: 'abc',
    description: 'abc',
    image: 'abc',
    price: 'abc'
  }));

const source = _.range(0, 3).reduce(memo => {
  const name = 'abc';

  // eslint-disable-next-line no-param-reassign
  memo[name] = {
    name,
    results: getResults()
  };

  return memo;
}, {});

class SearchBar extends Component<any, any> {
  public componentWillMount() {
    this.resetComponent();
  }

  public resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  public handleResultSelect = (e: any, { result }: any) => this.setState({ value: result.title });

  public handleSearchChange = (e: any, { value }: any) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) {
        return this.resetComponent();
      }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result: any) => re.test(result.title);

      const filteredResults = _.reduce(
        source,
        (memo, data: any, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) {
            memo[name] = { name, results };
          }

          return memo;
        },
        {}
      );

      this.setState({
        isLoading: false,
        results: filteredResults
      });
    }, 300);
  };

  public render() {
    const { isLoading, value, results } = this.state as any;

    return (
      <div style={{ display: 'flex', width: '100%' }}>
        <Search
          category
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
          input={{ fluid: true }}
          style={{ width: '100%' }}
          placeholder={'Search'}
          {...this.props}
        />
        <Button style={{ marginLeft: '10px' }}>Search</Button>
      </div>
    );
  }
}

export default SearchBar;
