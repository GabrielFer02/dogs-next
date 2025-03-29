import style from './button.module.css';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};
