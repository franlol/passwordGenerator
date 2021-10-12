import { useState, useRef, MouseEvent } from 'react';
import { generateCharactersList, pwGenerator } from '../../utils/generator/generator';

import Checkbox from './Checkbox/Checkbox';
import './form.styles.scss';
import { ELabels } from './form.types';

export default function Form() {
  const [password, setPassowrd] = useState<string>('');

  const cb1Ref = useRef<HTMLInputElement>(null);
  const cb2Ref = useRef<HTMLInputElement>(null);
  const cb3Ref = useRef<HTMLInputElement>(null);
  const cb4Ref = useRef<HTMLInputElement>(null);
  const cb5Ref = useRef<HTMLInputElement>(null);
  const resultInputRef = useRef<HTMLInputElement>(null);

  const generateClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    const characterList = generateCharactersList();
    const password = pwGenerator(characterList, 24);

    setPassowrd(password);
  }

  return (
    <form>
      <Checkbox id='cb1' label={ELabels.INCLUDE_UPPERCASE} value='cb1' ref={cb1Ref} />
      <Checkbox id='cb2' label={ELabels.INCLUDE_LOWERCASE} value='cb2' ref={cb2Ref} />
      <Checkbox id='cb3' label={ELabels.INCLUDE_NUMBERS} value='cb3' ref={cb3Ref} />
      <Checkbox id='cb4' label={ELabels.INCLUDE_SIMBOLS} value='cb4' ref={cb4Ref} />
      <Checkbox id='cb5' label={ELabels.INCLUDE_SPECIAL_CHARS} value='cb5' ref={cb5Ref} />

      <label htmlFor='result'>
        <button onClick={generateClickHandler}>Generate</button>
        <input ref={resultInputRef} id='result' type='text' disabled value={password} />
      </label>
    </form>
  )
}
