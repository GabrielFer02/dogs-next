import photosGet, { Photo } from '@/actions/photo-get';
import userGet, { User } from '@/actions/user-get';
import Feed from '@/components/Feed/feed';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const resolvedUser = user as User | null;

  const { data } = await photosGet({ user: resolvedUser?.username });
  const resolvedPhoto = data as Photo[] | null;

  return (
    <section>
      {resolvedPhoto?.length ? (
        <Feed photos={resolvedPhoto} user={resolvedUser?.username} />
      ) : (
        <div>
          <p
            style={{ color: '#444', fontSize: '1.25rem', marginBottom: '1rem' }}
          >
            Nenhuma foto encontrada
          </p>
          <Link
            href='/conta/postar'
            className='button'
            style={{ display: 'inline-block' }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
