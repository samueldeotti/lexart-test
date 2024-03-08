type CheckPasswordProps = {
  isValid: boolean;
  text: string;
};

export default function CheckPassword({ isValid, text }: CheckPasswordProps) {
  return (
    <span
      style={ {
        color: isValid ? 'green' : 'red' } }
    >
      {text}
    </span>
  );
}
