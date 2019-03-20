import _ from 'lodash';
import React, { useState } from 'react';
import { Search, Button } from 'semantic-ui-react';

import SEARCH_PRODUCT_WITH_CATEGORY from '../../graphql/SearchProductsWithCategory.graphql';
import { Query } from 'react-apollo';

const SearchBar = (props: any) => {
  const [{ value }, setState] = useState({ value: '' });

  return (
    <Query query={SEARCH_PRODUCT_WITH_CATEGORY} variables={{ search: value }}>
      {({ loading, data, refetch }) => {
        const handleResultSelect = (e: any, { result }: any) => setState({ value: result.title });

        const handleSearchChange = (e: any, { value: val }: any) => {
          setState({ value: val });

          setTimeout(() => {
            refetch();
          }, 300);
        };

        let filteredResults: any = {};
        if (!loading) {
          filteredResults = data.searchProductsWithCategory.map(({ name, results }: any) => {
            const newCategory: any = { name };
            newCategory.results = results.map(({ name: productName, imageSource, price, brand }: any) => {
              const product: any = {};
              product.title = productName;
              product.image = imageSource;
              product.price = price + 'MKD';
              product.description = brand.name;
              return product;
            });
            return newCategory;
          });
        }
        return (
          <div style={{ display: 'flex', width: '100%' }}>
            <Search
              category
              loading={loading}
              onResultSelect={handleResultSelect}
              onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
              results={filteredResults}
              value={value}
              input={{ fluid: true }}
              style={{ width: '100%' }}
              placeholder={'Search'}
              fluid={true}
              {...props}
            />
            <Button style={{ marginLeft: '10px' }}>Search</Button>
          </div>
        );
      }}
    </Query>
  );
};

export default SearchBar;
