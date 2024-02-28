import React, {Fragment} from 'react';
import {SafeAreaView, View, ViewBase} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/solid';

import * as Styled from './styled';

type Props = {
  title: string;
  onFloatingPress: () => void;
  children: React.ReactNode;
};

const HomeTemplate: React.FC<Props> = props => (
  <Styled.Root testID="HomeTemplate">
    <Styled.Container testID="HomeTemplatePageContainer">
      <SafeAreaView style={{flex: 1}} testID="SafeAreaView">
        {!!props.title && (
          <Styled.Title testID="HomeTitle">{props.title}</Styled.Title>
        )}
        {props.children}
      </SafeAreaView>
    </Styled.Container>
    <Styled.FloatingButton
      testID="AddTodoButton"
      onPress={props.onFloatingPress}>
      <PlusIcon testID="AddTodoIcon" color={'white'} size={40} />
    </Styled.FloatingButton>
  </Styled.Root>
);
export default HomeTemplate;
