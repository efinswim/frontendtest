import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Wrapper = styled.label`
  width: 220px;

  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 3px;
`;

const CheckBox = (props) => {
  return (
    <Wrapper>
      <Input type="checkbox" />
      {props.label}
    </Wrapper>
  );
};

export default CheckBox;
