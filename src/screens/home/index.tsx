import React, {useState} from 'react';

import HomeTemplate from '../../template/home/HomeTemplate';
import Card from '../../components/Card';

const HomeScreen: React.FC = () => {
  const [completed, setCompleted] = useState(false);

  const toggle = () => {
    setCompleted(prev => !prev);
  };

  return (
    <HomeTemplate title="Todo List">
      <Card
        onToggle={toggle}
        completed={completed}
        title={'Submit a client proposal'}
        description={"Don't forget to create a template"}
      />
    </HomeTemplate>
  );
};
export default HomeScreen;
