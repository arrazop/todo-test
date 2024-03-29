import React, {useCallback, useState} from 'react';
import * as Styled from './styled';
import {BottomSheetModal, useBottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useAppDispatch} from '../../redux/hooks';
import {actions} from '../../redux';

interface Props {
  snapPoints: Array<number | string>;
  allowSwipeDownToClose?: boolean;
  onChange?: (index: number) => void;
}

const FormBottomSheet = React.forwardRef<BottomSheetModalMethods, Props>(
  (props, ref) => {
    const [formError, setFormError] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();
    const {dismiss} = useBottomSheetModal();

    const onClose = useCallback(() => {
      setTaskName('');
      setFormError(false);
      setDescription('');
      dismiss();
    }, [dismiss]);

    const onSubmit = useCallback(() => {
      if (!taskName) {
        setFormError(true);
        return;
      }

      dispatch(actions.todo.addTodo({description, title: taskName}));
      onClose();
    }, [description, dispatch, onClose, taskName]);

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={props.snapPoints}
        enableContentPanningGesture={true}
        onChange={props.onChange}>
        <Styled.Container>
          <Styled.Title>Awesome, keep achieving tasks 🎉</Styled.Title>
          <Styled.Input
            placeholder="Task *"
            $error={formError}
            onChangeText={setTaskName}
            value={taskName}
          />
          <Styled.Input
            placeholder="Description"
            onChangeText={setDescription}
            value={description}
          />
          <Styled.Row>
            <Styled.Button onPress={onClose}>
              <Styled.Label>Cancel</Styled.Label>
            </Styled.Button>
            <Styled.Button onPress={onSubmit}>
              <Styled.Label>Add</Styled.Label>
            </Styled.Button>
          </Styled.Row>
        </Styled.Container>
      </BottomSheetModal>
    );
  },
);
export default FormBottomSheet;
