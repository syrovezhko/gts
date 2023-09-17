'use client'
import React from 'react';
import styles from './Fooer.module.scss';
import { Paginator } from 'primereact/paginator';
import { observer } from 'mobx-react-lite';
import paginator from '@/store/paginator';
import _switch from '@/store/switch';

const Footer = observer(() => {
  return (
    <footer className={styles.footer}>
      {Boolean(_switch.data.length > paginator.rows) &&<Paginator
        first={paginator.first}
        rows={paginator.rows}
        totalRecords={_switch.data.length }
        onPageChange={(e) => {
          paginator.setFirst(e.first)
          paginator.setRows(e.rows)
        }}
      />}
    </footer>
  );
});

export default Footer;