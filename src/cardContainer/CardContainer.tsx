import React from 'react';
import styles from './CardContainer.module.scss'
import Card from '@/card/Card';
import _switch from '@/store/switch';
import { observer } from 'mobx-react-lite';
import useDate from '@/hooks/useDate';

const CardContainer = observer(() => {
  return (
    <div className={styles.container}>
      {_switch.data.map(i => 
        <Card
          key={i.id}
          user={i.userId}
          name={i.userName}
          equipment={i.equipment}
          message={i.message}
          importance={i.importance}
          date={useDate()}
        />)}
    </div>
  );
});

export default CardContainer;