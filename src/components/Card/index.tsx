import React from 'react';

import * as Styled from './styled';
import Radio from '../Radio';

type Props = {
  title: string;
  description?: string;
  completed: boolean;
  onToggle: () => void;
};

const Card: React.FC<Props> = ({title, description, completed, onToggle}) => (
  <Styled.Container $completed={completed}>
    <Styled.Row>
      <Radio selected={completed} onToggle={onToggle} />
      <Styled.Center>
        <Styled.Title $completed={completed} numberOfLines={1}>
          {title}
        </Styled.Title>
        {description && (
          <Styled.Description $completed={completed} numberOfLines={3}>
            {description}
          </Styled.Description>
        )}
      </Styled.Center>
    </Styled.Row>
  </Styled.Container>
);
export default Card;
