import React from 'react';
import styles from './CardContainer.module.scss'
import Card from '@/card/Card';
import _switch from '@/store/switch';
import { observer } from 'mobx-react-lite';
import useDate from '@/hooks/useDate';

const CardContainer = observer(() => {
  return (
    <div
      className={styles.container}
    >
      {_switch.data.map((_, i) => 
        <Card
          key={i}
          date={useDate()}
          i={i}
        />)}
    </div>
  );
});

export default CardContainer;