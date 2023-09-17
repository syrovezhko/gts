import React from 'react';
import styles from './CardContainer.module.scss'
import Card from '@/card/Card';
import _switch from '@/store/switch';
import { observer } from 'mobx-react-lite';
import paginator from '@/store/paginator';
import search from '@/store/search';

const CardContainer = observer(() => {
  return (
    <div
      className={styles.container}
    >
      {Boolean(_switch.data.length) &&_switch.data.filter((i: { message: string; }) => {
        return search.value.toLocaleLowerCase() === ''
        ? i
        : i.message.toLocaleLowerCase().includes(search.value)
      }).slice(paginator.first, paginator.first + paginator.rows).map((_: any, i: number) => 
        <Card
          key={i+paginator.first}
          i={i+paginator.first}
        />)}
    </div>
  );
});

export default CardContainer;