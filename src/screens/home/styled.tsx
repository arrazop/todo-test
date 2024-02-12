import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 10px;
  background-color: white;
`;

export const SectionHeader = styled.View`
  padding-vertical: 20px;
  background-color: ${({theme}) => theme.colors.grey.four};
`;

export const SectionTitle = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;

export const Separator = styled.View`
  height: 10px;
`;
