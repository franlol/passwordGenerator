import { forwardRef } from 'react';
import { TPropsCheckbox } from './checkbox.types'

const Checkbox = forwardRef<HTMLInputElement, TPropsCheckbox>((props, inputRef) => {
  const { label, id, value } = props;

  return (
    <label htmlFor={id}>
      {label}
      <input ref={inputRef} type='checkbox' id={id} value={value} />
    </label>
  )
})

export default Checkbox;
