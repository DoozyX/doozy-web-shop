import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 500px;
`;

const LayoutCenter = ({ children, ...rest }) => {
  return (
    <Section {...rest}>
      <Content>{children}</Content>
    </Section>
  );
};

LayoutCenter.propTypes = {
  children: PropTypes.node
};

export default LayoutCenter;
