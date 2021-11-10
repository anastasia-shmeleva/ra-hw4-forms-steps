import PropTypes from 'prop-types';

export default function TableItem(props) {
  const { 
    date, 
    distance,
    id,
    onDelete,
  } = props;

  return (
    <tr className='table__row' id={id}>
      <td>{date}</td>
      <td>{distance}</td>
      <td className='delete__btn' onClick={onDelete}>&#x2718;</td>
    </tr>     
  )
}

TableItem.propTypes = {
  date: PropTypes.string,
  distance: PropTypes.string,
  onDelete: PropTypes.func,
}