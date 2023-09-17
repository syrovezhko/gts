"use client"

import CardContainer from '@/cardContainer/CardContainer'
import styles from './page.module.scss'
import _switch from '@/store/switch'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react';
import Table from '@/table/Table'

const Home = observer(() => {
  useEffect(() => {
    const interval = setInterval(() => {
      _switch.featData()
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className={styles.main}>
      {_switch.button === _switch.chose[0] && <Table/>}
      {_switch.button === _switch.chose[1] && <CardContainer/>}
    </main>
  )
}
)
export default Home