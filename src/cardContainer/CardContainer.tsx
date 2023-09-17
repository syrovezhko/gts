import React from 'react';
import styles from './CardContainer.module.scss'
import Card from '@/card/Card';
import _switch from '@/store/switch';
import { observer } from 'mobx-react-lite';
import useDate from '@/hooks/useDate';
import paginator from '@/store/paginator';

const CardContainer = observer(() => {
  return (
    <div
      className={styles.container}
    >
      {Boolean(_switch.data.length) &&_switch.data.slice(paginator.first, paginator.first + paginator.rows).map((_: any, i: number) => 
        <Card
          key={i+paginator.first}
          i={i+paginator.first}
        />)}
    </div>
  );
});

export default CardContainer;