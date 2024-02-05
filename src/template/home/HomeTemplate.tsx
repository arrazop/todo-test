import React from 'react';
import {SafeAreaView} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/solid';

import * as Styled from './styled';

type Props = {
  title: string;
  children: React.ReactNode;
};

const HomeTemplate: React.FC<Props> = props => (
  <>
    <Styled.Container>
      <SafeAreaView>
        {props.title && <Styled.Title>{props.title}</Styled.Title>}
        {props.children}
      </SafeAreaView>
    </Styled.Container>
    <Styled.FloatingButton>
      <PlusIcon color={'white'} size={40} />
    </Styled.FloatingButton>
  </>
);
export default HomeTemplate;
