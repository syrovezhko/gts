import React from 'react';
import styles from './Table.module.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { observer } from 'mobx-react-lite';
import _switch from '@/store/switch';
import paginator from '@/store/paginator';
        

const Table = observer(() => {
  return (
    <div className={styles.container}>
      {Boolean(_switch.index || true) && <DataTable
        value={_switch.data.slice(paginator.first, paginator.first + paginator.rows) }
        emptyMessage="записей пока нет"
        dataKey='id'
        className={styles.table}
      >
        <Column
          field="date"
          header="Дата"
        />
        <Column
          field="importance"
          header="Важность"
        />
        <Column
          field="equipment"
          header="Оборудование"
        />
        <Column
          sortable
          field="message"
          header="Сообщение"
        />
        <Column
          sortable
          field="userName"
          header="Ответсвенный"
        />
      </DataTable>}
    </div>
  );
});

export default Table;