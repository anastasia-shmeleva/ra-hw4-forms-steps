import './App.css';
import { useState } from "react";
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import data from './data';
import shortid from 'shortid';

function App() {
  const [table, setTable] = useState(data);
  const [form, setForm] = useState({ date: '', distance: '' });

  function onFormSubmit(form) {

    let itemInData = data.find(dataItem => {
      return dataItem.date === form.date;
    });

    if (itemInData === undefined) {
      // new item
      setTable([
        ...table,
        {
          id: shortid.generate(),
          date: form.date,
          distance: form.distance,
        },
      ]); 
    } else {
      // edit item in table
      const index = table.findIndex(
        (item) => item.date <= form.date
      );

      setTable([
        ...table.slice(0, index),
        {
          id: table[index].id,
          date: table[index].date,
          distance: String(parseFloat(table[index].distance) + parseFloat(form.distance)),
        },
        ...table.slice(index + 1),
      ]);
    }

    setForm({ date: '', distance: '' }) //не очищает поле после добавления записи
  }

  function onFieldChange({ target }) {
    const{ name, value } = target;

    setForm(prev => ({...prev, [name]: value}));
  }

  function onItemDelete({ target }) {
    const index = table.findIndex(item => item.id === target.closest('.table__row').id);

    setTable([
      ...table.slice(0, index),
      ...table.slice(index + 1),
    ])
  }

  return (
    <div className='container'>
      <Form 
        onSubmit={onFormSubmit}
        onChange={onFieldChange}
        form={form}
      />
      <Table 
        onDelete={onItemDelete}
        // onChange={}
        table={table}/>
    </div>
  );
}

export default App;
