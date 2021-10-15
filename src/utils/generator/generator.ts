import { ECharactersList, TgenerateCharactersListArgs } from "./generator.types";

export const generateCharactersList = (flags: TgenerateCharactersListArgs): string => {
  const {
    upperCase,
    lowerCase,
    numbers,
    simbols,
    specialChars,
  } = flags;

  let charactersList = "";

  if (upperCase) charactersList += ECharactersList.normals.toUpperCase()
  if (lowerCase) charactersList += ECharactersList.normals.toLowerCase()
  if (numbers) charactersList += ECharactersList.numbers
  if (simbols) charactersList += ECharactersList.simbols
  if (specialChars) charactersList += ECharactersList.specials

  return charactersList.trim();
}

export const generatePassword = (characterList: string, length: number) => {
  const maxLength = length <= 100 ? length : 100;
  const passwordLengthEmptyArray: Array<null> = Array(maxLength).fill(null);

  const password = passwordLengthEmptyArray.reduce((prev) => {
    return prev.concat(characterList.charAt(Math.floor(Math.random() * characterList.length)));
  }, '');

  return password;
}
