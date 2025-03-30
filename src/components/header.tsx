'use client'

import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import userGet, { User } from '@/actions/user-get';
import React from 'react';

export default  function Header() {
  const [infos, setInfos] = React.useState<User | null>(null)
  
  React.useEffect(() => {
    (async () => {
      const { data } = await userGet();
      setInfos(data as User)
    })()
   
  },[])

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
