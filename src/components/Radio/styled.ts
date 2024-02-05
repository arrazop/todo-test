import styled, {css} from 'styled-components/native';

export const Radio = styled.Pressable<{$filled: boolean}>`
  border-width: 1px;
  height: 30px;
  border-radius: 30px;
  aspect-ratio: 1;
  justify-content: center;
  border-color: ${({theme}) => theme.colors.grey.two};
  align-items: center;

  ${({$filled, theme}) =>
    $filled &&
    css`
      border-color: ${theme.colors.success.dark};
      background-color: ${theme.colors.success.dark};
    `}
`;
