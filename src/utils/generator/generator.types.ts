export type TGenerateCharactersListArgs = {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  simbols: boolean;
  specialChars: boolean;
}

export enum ECharactersList {
  normals = 'abcdefghijklmnopqrstuvwxyz',
  numbers = '0123456789',
  simbols = '!@#$%^&*',
  specials = '()_+~`|}{[]:;?><,./-='
}
