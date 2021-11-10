import TableItem from "./TableItem";
import PropTypes from 'prop-types';

export default function Table(props) {
  const {
    onDelete,
    table,
  } = props; 

  return (
    <table className='table'>
      <thead className='table__head'>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
        <tr className='spacer'></tr>
      </thead>
      <tbody className='table__body'>
        {table.map(item => {
          return (
            <TableItem 
              date={item.date} 
              distance={item.distance}
              onDelete={onDelete} 
              id={item.id}
              key={item.id}
            />
          );
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  table: PropTypes.array,
  onDelete: PropTypes.func,
}
