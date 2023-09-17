import React, { FC, useEffect, useState } from 'react';
import styles from './Card.module.scss'
import Image from 'next/image';
import _switch from '@/store/switch';
import { observer } from 'mobx-react-lite';
interface IData {
  date: string;
  i: number;
}

const Card: FC<IData> = observer(({ date, i }) => {
  const [card, setCard] = useState(`${styles.card}`)
  useEffect(()=>{
    if(_switch.data[i].id === _switch.current) {
      setCard(`${styles.card} ${styles.card_active}`)
    } else {
      setCard(`${styles.card}`)
    }
  },[_switch.current])

  return (
    <div
      className={card}
      onClick={()=>_switch.mark(_switch.data[i].id)}
      onKeyDown={e=>_switch.checkRead(e)}
      tabIndex={-1}
    >
      <div className={styles.card__container}>
        <ul className={styles.list}>
          <li>Дата</li>
          <li>Важность</li>
          <li>Оборудование</li>
          <li>Сообщение</li>
        </ul>
        <ul className={styles.list}>
          <li>{date}</li>
          <li>
            {_switch.data[i].isRead ?
            <span className={`${styles.isRead} ${styles.isRead_done}`}>X</span>:
            <span className={styles.isRead}></span>
            }
            {_switch.data[i].importance}
            </li>
          <li>{_switch.data[i].equipment}</li>
          <li>{_switch.data[i].message}</li>
        </ul>
        <div className={styles.user}>
          <Image
            src='/user.jpg'
            width={70}
            height={70}
            alt={`Фотография пользователя ${_switch.data[i].userName}`}
            className={styles.user__img}
          />
          <p>{_switch.data[i].userName}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;