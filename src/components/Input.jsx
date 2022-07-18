import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 3px;
`;

const Input = (props) => {
  return <Wrapper placeholder={props.placeholder} type={props.type} value={props.value} />;
};

export default Input;
