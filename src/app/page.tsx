"use client"

import CardContainer from '@/cardContainer/CardContainer'
import styles from './page.module.scss'
import _switch from '@/store/switch'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react';
import Table from '@/table/Table'
import paginator from '@/store/paginator'

const Home = observer(() => {
  const [windowSize, setWindowSize] = useState( window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    console.log("window.innerWidth", window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      _switch.featData()
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    console.log(paginator.rows)

    if(windowSize < 700) paginator.rows = 4
    else if(windowSize < 1010) paginator.rows = 8
    else paginator.rows = 12
  },[windowSize])
  
  return (
    <main className={styles.main}>
      {_switch.button === _switch.chose[0] && <Table/>}
      {_switch.button === _switch.chose[1] && <CardContainer/>}
    </main>
  )
}
)
export default Home