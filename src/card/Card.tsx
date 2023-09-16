import React, { FC } from 'react';
import styles from './Card.module.scss'

interface IData {
  key: number;
  user: number;
  name: string;
  equipment: string | null;
  message: string;
  importance: string;
  date: string;
}

const Card: FC<IData> = ({
              key,
              user,
              name,
              equipment,
              message,
              importance,
              date
            }) => {
  return (
    <div className={styles.card}>
      <p>{date}</p>
      <p>{user}</p>
      <p>{name}</p>
      <p>{equipment}</p>
      <p>{message}</p>
      <p>{importance}</p>
    </div>
  );
};

export default Card;