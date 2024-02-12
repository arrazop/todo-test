import React from 'react';
import {SafeAreaView} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/solid';

import * as Styled from './styled';

type Props = {
  title: string;
  onFloatingPress: () => void;
  children: React.ReactNode;
};

const HomeTemplate: React.FC<Props> = props => (
  <>
    <Styled.Container>
      <SafeAreaView style={{flex: 1}}>
        {!!props.title && <Styled.Title>{props.title}</Styled.Title>}
        {props.children}
      </SafeAreaView>
    </Styled.Container>
    <Styled.FloatingButton onPress={props.onFloatingPress}>
      <PlusIcon color={'white'} size={40} />
    </Styled.FloatingButton>
  </>
);
export default HomeTemplate;
