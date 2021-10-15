import { forwardRef } from 'react'
import { TPropsInput } from './input.types';

import './input.styles.scss';

const Input = forwardRef<HTMLInputElement, TPropsInput>((props, inputRef) => {
  const { id, value, title } = props;

  return (
    <input className="input__text" ref={inputRef} id={id} type='text' disabled value={value} title={title} />
  )
})

export default Input;
