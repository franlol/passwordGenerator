import { forwardRef } from 'react';
import { TPropsCheckbox } from './checkbox.types'

import './checkbox.styles.scss';

const Checkbox = forwardRef<HTMLInputElement, TPropsCheckbox>((props, inputRef) => {
  const { label, id, value } = props;

  return (
    <label htmlFor={id}>
      <input ref={inputRef} type='checkbox' id={id} value={value} />
      {label}
    </label>
  )
})

export default Checkbox;
