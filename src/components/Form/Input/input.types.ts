export type TPropsInput = {
  id?: string;
  value: string;
  setter?: React.Dispatch<React.SetStateAction<string>>;
  title?: string;
}

export enum EInput {
  titleClipboard = 'Copy to clipboard.'
}
