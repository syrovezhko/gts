"use client"

import React from 'react';
import styles from './Header.module.scss';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import _switch from '@/store/switch';
import search from '@/store/search';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  return (
    <header className={styles.header}>
      <SelectButton
        value={_switch.button}
        onChange={(e) => _switch.setButton(e.value)}
        options={_switch.chose}
      />
      <div className={styles.search}>
        <InputText
          value={search.value}
          onChange={(e) => search.setValue(e.target.value)}
        />
        <Button
          label="Поиск"
          severity="secondary"
          text
          raised
        />
      </div>
    </header>
  );
});

export default Header;