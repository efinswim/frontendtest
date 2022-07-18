import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  background: white;

  width: 240px;

  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 3px;
`;

const Button = (props) => {
  return <Wrapper>{props.value}</Wrapper>;
};

export default Button;
