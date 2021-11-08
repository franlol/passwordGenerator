import { ForwardedRef, forwardRef } from 'react';

import { TOption, TProps } from './select.types';
import './select.styles.scss';

const Option = (props: TProps<TOption>, selectRef: ForwardedRef<HTMLSelectElement>) => {
  const { id, label, options } = props;

  return (
    <label htmlFor={id} className='select'>
      {label}
      <select ref={selectRef} className='select__element'>
        {options.map((option, key) =>
          <option key={key} id={`option-${key}`} className='select__option'>
            {option.value}
          </option>
        )}
      </select>
    </label>
  )
}

export default forwardRef<HTMLSelectElement, TProps<TOption>>(Option);
