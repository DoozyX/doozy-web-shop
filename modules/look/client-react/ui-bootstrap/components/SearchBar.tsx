import _ from 'lodash';
import React, { useState } from 'react';
import { Search, Button } from 'semantic-ui-react';

import SEARCH_PRODUCT_WITH_CATEGORY from '../../graphql/SearchProductsWithCategory.graphql';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router';

const SearchBar = ({ history }: any) => {
  const [{ value }, setState] = useState({ value: '' });

  return (
    <Query query={SEARCH_PRODUCT_WITH_CATEGORY} variables={{ search: value }}>
      {({ loading, data, refetch }: any) => {
        const handleResultSelect = (e: any, { result }: any) => {
          setState({ value: result.title });
          history.push(`/product/${result.id}`);
        };

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
            newCategory.results = results.map(({ name: productName, imageSource, price, brand, id }: any) => {
              const product: any = {};
              product.id = id;
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
            />
            <Button style={{ marginLeft: '10px' }} color="green">
              Search
            </Button>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(SearchBar);
