import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 10px;
  background-color: ${({theme}) => theme.colors.grey.four};
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FloatingButton = styled.Pressable`
  position: absolute;
  height: 80px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({theme}) => theme.colors.main};
  bottom: 30px;
  right: 20px;
`;
