import React from 'react';
import * as Styled from './styled';
import {CheckIcon} from 'react-native-heroicons/solid';

type Props = {
  selected: boolean;
  onToggle: () => void;
};

const Radio: React.FC<Props> = ({selected, onToggle}) => (
  <Styled.Radio $filled={selected} onPress={onToggle}>
    {selected && <CheckIcon color={'white'} />}
  </Styled.Radio>
);
export default Radio;
