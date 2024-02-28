import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {ArchiveBoxIcon} from 'react-native-heroicons/solid';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {actions, selectors} from '../../redux';
import * as Styled from './styled';
import {RootState} from '../../redux/store';
import {Todo} from '../../types';
import {Text} from 'react-native';
import Card from '../Card';

type Props = {
  testID: string;
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo: () => void;
};

const renderRightActions = () => (
  <Styled.SwipeActionContainer>
    <Styled.ActionContainer>
      <ArchiveBoxIcon color={'white'} />
    </Styled.ActionContainer>
  </Styled.SwipeActionContainer>
);

export const TodoListItem: React.FC<Props> = React.memo(
  ({todo, toggleTodo, deleteTodo, testID}) => {
    return (
      <Swipeable
        testID={testID}
        renderRightActions={renderRightActions}
        onSwipeableRightOpen={deleteTodo}>
        <Card
          onToggle={toggleTodo}
          completed={todo.completed}
          title={todo.title}
          description={todo.description}
        />
      </Swipeable>
    );
  },
);

export const NormalizedTodoListItem: React.FC<{todoId: string}> = React.memo(
  ({todoId}) => {
    const dispatch = useAppDispatch();

    const todo = useAppSelector(
      (state: RootState) => selectors.todo.todosById(state)[todoId],
    );

    const deleteTodo = () => {
      if (todo) {
        dispatch(actions.todo.deleteTodo({id: todoId}));
      }
    };

    const toggleTodo = () => {
      if (todo) {
        dispatch(actions.todo.toggleComplete({id: todoId}));
      }
    };

    if (!todo) {
      return <Text>An error has ocurred ${todoId}</Text>;
    }

    return (
      <TodoListItem
        key={`${todoId}_${todo.completed}`}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    );
  },
);
