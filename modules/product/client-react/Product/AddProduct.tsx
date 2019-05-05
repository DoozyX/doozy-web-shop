import React, { Suspense, useState } from 'react';
import Helmet from 'react-helmet';

import { PageLayout } from '@gqlapp/look-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '../../../../settings';
import { Form, Loader, Header } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#6c6';
  }
  return '#666';
};

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => getColor(props)};
  border-style: ${(props: any) => (props.isDragActive ? 'solid' : 'dashed')};
  background-color: ${(props: any) => (props.isDragActive ? '#eee' : '')};
`;

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const Product = ({ t, history }: any) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ accept: 'image/*' });
  const [state, setState] = useState({ title: '', description: '', price: '', size: '' });
  const options = [{ key: 'm', text: 'Male', value: 'male' }, { key: 'f', text: 'Female', value: 'female' }];

  const handleChange = (e: any, { name, value }: any) => {
    (setState as any)({ ...state, [name]: value });
  };

  const { title, description, price, size } = state;
  const handleSubmit = () => {
    history.push('/products');
  };

  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<Loader />}>
        <div style={{ marginTop: '10px' }}>
          <Header as="h2">New product</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Input placeholder="Name" name="title" value={title} onChange={handleChange} fluid />
            <Form.Input
              placeholder="Description"
              name="description"
              value={description}
              onChange={handleChange}
              fluid
            />
            <Form.Input placeholder="Price" name="price" value={price} onChange={handleChange} fluid />
            <Form.Input placeholder="Size" name="size" value={size} onChange={handleChange} fluid />
            <Form.Select label="Category" options={options} placeholder="Category" fluid />
            <Form.Select label="Brand" options={options} placeholder="Brand" fluid />
            <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </Container>
            <Form.Button content="Submit" fluid />
          </Form>
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default translate('product')(Product);
