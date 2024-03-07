import { InputContainer } from './InputStyle';

type InputProps = {
  type: string,
  name: string,
  value: string,
  setValue: (value: any) => void,
  text: string,
  required?: boolean
  isObject?: boolean
};

export default function Input({ type,
  name, value, setValue, text, required = false, isObject = false }: InputProps) {
  console.log(name);
  return (
    <InputContainer id="labelContainer">
      <input
        type={ type }
        id={ name }
        name={ name }
        placeholder={ text }
        value={ value }
        onChange={ (e) => {
          if (isObject) {
            setValue(e);
            return;
          }
          setValue(e.target.value);
        } }
        required={ required }
      />
      <label htmlFor={ name }>
        {text}
      </label>
    </InputContainer>
  );
}
