import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(TouchableOpacity)`
  background-color: #dadada;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 8px;
`;

const Button = ({onPress, width, height}) => (
  <StyledButton onPress={onPress} width={width} height={height}></StyledButton>
);

export default Button;
