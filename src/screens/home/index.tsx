import React, {useCallback, useEffect, useState} from 'react';

import HomeTemplate from '../../template/home/HomeTemplate';
import useProps from './hooks/useProps';
import FormBottomSheet from '../../components/FormBottomSheet';
import {ListRenderItem, SectionList} from 'react-native';

import {SectionHeader, SectionTitle, Separator} from './styled';
import {NormalizedTodoListItem} from '../../components/TodoListItem';
import {useAppSelector} from '../../redux/hooks';
import {selectors} from '../../redux';

const HomeScreen: React.FC = () => {
  const {handlePresentModalPress, bottomSheetModalRef, snapPoints, todoList} =
    useProps();
  const todoListIds = useAppSelector(selectors.todo.todoIds);
  const [refreshFlag, setRefreshFlag] = useState(false); // Step 1: Define the refresh flag state

  const renderItem: ListRenderItem<string> = useCallback(({item}) => {
    return <NormalizedTodoListItem todoId={item} key={item} />;
  }, []);

  const keyExtractor = (item: string, index: number) => `${item}_${index}`;

  const renderSectionHeader = useCallback(
    ({section}: {section: {title: string}}) => (
      <SectionHeader>
        <SectionTitle>{section.title}</SectionTitle>
      </SectionHeader>
    ),
    [],
  );

  const onRefresh = useCallback(() => {
    setRefreshFlag(true);
    setTimeout(() => {
      setRefreshFlag(false);
    }, 2000);
  }, []);

  return (
    <HomeTemplate title="Todo App" onFloatingPress={handlePresentModalPress}>
      <SectionList
        style={{flex: 1}}
        ItemSeparatorComponent={Separator}
        sections={todoList}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        removeClippedSubviews
        keyExtractor={keyExtractor}
        extraData={refreshFlag}
        refreshing={refreshFlag}
        onRefresh={onRefresh}
      />
      <FormBottomSheet snapPoints={snapPoints} ref={bottomSheetModalRef} />
    </HomeTemplate>
  );
};
export default HomeScreen;
