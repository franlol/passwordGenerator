const character = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const simbols = '!@#$%^&*';
const specials = '()_+~`|}{[]\:;?><,./-=';

export const generateCharactersList = () => character + numbers + simbols + specials;

export const pwGenerator = (characterList: string, length: number) => {
  const maxLength = length <= 100 ? length : 100;
  const passwordLengthEmptyArray: Array<null> = Array(maxLength).fill(null);

  const password = passwordLengthEmptyArray.reduce((prev) => {
    return prev.concat(characterList.charAt(Math.floor(Math.random() * characterList.length)));
  }, '');

  return password;
}
