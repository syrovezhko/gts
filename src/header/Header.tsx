"use client"

import React, { useState } from 'react';
import styles from './Header.module.scss';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


const Header = () => {
  const cities = ['Таблица', 'Карточки']
  const [button, setButton] = useState(cities[0])
  const [search, setSearch] = useState('')
  console.log(button)
  console.log(search)
  return (
    <header className={styles.header}>
      <SelectButton
        value={button}
        onChange={(e) => setButton(e.value)}
        options={cities}
      />
      <div className={styles.search}>
        <InputText value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button label="Поиск" severity="secondary" text raised />
      </div>
    </header>
  );
};

export default Header;