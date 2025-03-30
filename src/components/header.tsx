import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import userGet, { User } from '@/actions/user-get';

export default async function Header() {
  const { data } = await userGet();
  const infos = data as User;
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href='/'>
          <Image
            src={'/assets/dogs.svg'}
            alt='Dogs'
            width={28}
            height={22}
            priority
          />
        </Link>
        {infos ? (
          <Link className={styles.login} href='/conta'>
            {infos.username}
          </Link>
        ) : (
          <Link className={styles.login} href='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
