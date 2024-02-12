import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useMemo, useRef} from 'react';
import {useSelector} from 'react-redux';

import {selectors} from '../../../redux';

const useProps = () => {
  const completedTodos = useSelector(selectors.todo.selectCompletedTodos);
  const incompleteTodos = useSelector(selectors.todo.selectIncompletesTodos);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => [280, 300], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const formatedList = useMemo(() => {
    return [
      ...(incompleteTodos.length > 0
        ? [{title: 'Todo', data: incompleteTodos}]
        : []),
      ...(completedTodos.length > 0
        ? [{title: 'Completed', data: completedTodos}]
        : []),
    ];
  }, [completedTodos, incompleteTodos]);

  return {
    todoList: formatedList,
    handlePresentModalPress,
    snapPoints,
    bottomSheetModalRef,
  };
};

export default useProps;
