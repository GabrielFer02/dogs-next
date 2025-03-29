import style from './input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={style.input} type='text' id={props.name} {...props} />
      {error && <p>{error}</p>}
    </div>
  );
}
