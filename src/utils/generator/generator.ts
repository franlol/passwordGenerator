import { ECharactersList, TgenerateCharactersListArgs } from "./generator.types";

/**
 * Return a string with all the characters needed to generate a password.
 * @param {boolean} flags.upperCase Password will contain uperrcase characters.
 * @param {boolean} flags.lowerCase Password will contain lowerCase characters.
 * @param {boolean} flags.numbers Password will contain numeric characters.
 * @param {boolean} flags.simbols Password will contain simbols.
 * @param {boolean} flags.specialChars Password will contain special characters.
 * 
 * @returns {string} Characters string
 * @example "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
 */
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

/**
 * Returns a password, randomly matching the characterList param string .
 * @param characterList String with characters to use when generating the password.
 * @param length Desired length of the password.
 * @returns {String} The password.
 * @example "^0M8Wjsm*i5Dcj9!2#g8ouMC"
 */
export const generatePassword = (characterList: string, length: number = 16): string => {
  const maxLength: number = length <= 100 ? length : 100;
  const passwordLengthEmptyArray: Array<null> = Array(maxLength).fill(null);

  const password: string = passwordLengthEmptyArray.reduce((prev) => {
    return prev.concat(characterList.charAt(Math.floor(Math.random() * characterList.length)));
  }, '');

  return password;
}
