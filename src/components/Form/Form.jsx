import PropTypes from 'prop-types';

export default function Form(props) {
  const {
    onSubmit: onFormSubmit,
    onChange: onFieldChange,
    form,
  } = props;

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      onFormSubmit(form);
    }}>
        <div className='form__field form__date-field'>
          <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
          <input 
            className='form__date-input' 
            name='date'
            type='date'
            onChange={onFieldChange}
          />
        </div>

        <div className='form__field form__distance-field'>
          <label htmlFor='distance'>Пройдено км</label>
          <input 
            className='form__distance-input' 
            name='distance'
            type='number'
            onChange={onFieldChange}
          />
        </div>
      <button className='form__submit-btn'>OK</button>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.object,
}