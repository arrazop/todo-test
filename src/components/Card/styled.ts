import styled from 'styled-components/native';

export const Container = styled.View<{$completed: boolean}>`
  flex: 1;
  padding: 10px;
  background-color: ${({theme, $completed}) =>
    $completed ? theme.colors.success.shade8 : 'white'};
  border-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Center = styled.View`
  flex: 1;
  padding-horizontal: 8px;
`;

export const Title = styled.Text<{$completed: boolean}>`
  font-size: 22px;
  font-weight: 500;
  line-height: 35px;
  color: ${({$completed, theme}) =>
    $completed ? theme.colors.success.dark : 'black'};
`;

export const Description = styled.Text<{$completed: boolean}>`
  font-size: 15px;
  color: ${({theme, $completed}) =>
    $completed ? theme.colors.success.main : theme.colors.text.secondary};
`;
