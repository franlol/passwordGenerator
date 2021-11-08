export type TProps<TOption> = {
  id: string;
  name: string;
  label: string;
  options: Array<TOption>
}

export type TOption = {
  value: string;
  key: string;
}