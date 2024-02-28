import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const Input = styled(BottomSheetTextInput)<{$error?: boolean}>`
  padding: 10px;
  height: 50px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({theme, $error}) =>
    $error ? theme.colors.red : theme.colors.grey.three};
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.Pressable`
  width: 48%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-width: 1px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.info.main};
`;

export const Label = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 500;
`;
