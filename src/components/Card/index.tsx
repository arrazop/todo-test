import React from 'react';

import * as Styled from './styled';
import Radio from '../Radio';

type Props = {
  title: string;
  description?: string;
  completed: boolean;
  onToggle: () => void;
};

const Card: React.FC<Props> = React.memo(
  ({title, description, completed, onToggle}) => (
    <Styled.Container $completed={completed}>
      <Styled.Row>
        <Radio selected={completed} onToggle={onToggle} />
        <Styled.Center>
          <Styled.Title
            testID={'card-title-item'}
            $completed={completed}
            numberOfLines={1}>
            {title}
          </Styled.Title>
          {description && (
            <Styled.Description
              testID="card-desc-item"
              $completed={completed}
              numberOfLines={3}>
              {description}
            </Styled.Description>
          )}
        </Styled.Center>
      </Styled.Row>
    </Styled.Container>
  ),
);

export default Card;
