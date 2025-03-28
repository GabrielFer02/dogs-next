import style from './login.module.css';

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.login}>
      <div className={style.forms}>{children}</div>
    </div>
  );
}
