import { useState, useRef, MouseEvent, useEffect } from 'react';
import { generateCharactersList, generatePassword } from '../../utils/generator/generator';

import Checkbox from './Checkbox/Checkbox';
import Option from './Select/Select';
import Input from './Input/Input';

import './form.styles.scss';
import { ELabels } from './form.types';
import { EInput } from './Input/input.types';

export default function Form() {
  const [password, setPassowrd] = useState<string>('');

  const cb1Ref = useRef<HTMLInputElement>(null);
  const cb2Ref = useRef<HTMLInputElement>(null);
  const cb3Ref = useRef<HTMLInputElement>(null);
  const cb4Ref = useRef<HTMLInputElement>(null);
  const cb5Ref = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const resultInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    cb1Ref.current!.checked = true;
    cb2Ref.current!.checked = true;
    cb3Ref.current!.checked = true;
    cb4Ref.current!.checked = true;
  }, [])

  const generateClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    const characterList = generateCharactersList({
      upperCase: cb1Ref.current?.checked || false,
      lowerCase: cb2Ref.current?.checked || false,
      numbers: cb3Ref.current?.checked || false,
      simbols: cb4Ref.current?.checked || false,
      specialChars: cb5Ref.current?.checked || false,
    });

    const password = generatePassword(characterList, +selectRef.current!.value);

    setPassowrd(password);
    navigator.clipboard.writeText(password)
  }

  const options = [
    { key: '3', value: '3' },
    { key: '5', value: '5' },
    { key: '8', value: '8' },
    { key: '10', value: '10' },
    { key: '13', value: '13' },
    { key: '16', value: '16' },
    { key: '18', value: '18' },
    { key: '20', value: '20' },
    { key: '24', value: '24' },
    { key: '32', value: '32' },
  ];

  return (
    <form className="form">
      <Checkbox id='cb1' label={ELabels.INCLUDE_UPPERCASE} value='cb1' ref={cb1Ref} />
      <Checkbox id='cb2' label={ELabels.INCLUDE_LOWERCASE} value='cb2' ref={cb2Ref} />
      <Checkbox id='cb3' label={ELabels.INCLUDE_NUMBERS} value='cb3' ref={cb3Ref} />
      <Checkbox id='cb4' label={ELabels.INCLUDE_SIMBOLS} value='cb4' ref={cb4Ref} />
      <Checkbox id='cb5' label={ELabels.INCLUDE_SPECIAL_CHARS} value='cb5' ref={cb5Ref} />

      <Option
        id='option'
        name='characters_length'
        label={ELabels.CHARS_LIMIT}
        options={options}
        ref={selectRef}
      />

      <div className="form__cta">
        <button className="form__button" onClick={generateClickHandler}>Generate</button>
        <Input id="result" value={password} ref={resultInputRef} title={EInput.titleClipboard} />
      </div>
    </form>
  )
}
