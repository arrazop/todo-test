import styled from 'styled-components/native';

export const SwipeActionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({theme}) => theme.colors.red};
`;

export const ActionContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100px;
`;
