"use client"

import CardContainer from '@/cardContainer/CardContainer'
import styles from './page.module.scss'
import _switch from '@/store/switch'
import { observer } from 'mobx-react-lite'
import React from 'react';

const Home = observer(() => {
  return (
    <main className={styles.main}>
      {_switch.button === _switch.chose[1] && <CardContainer/>}
    </main>
  )
}
)
export default Home