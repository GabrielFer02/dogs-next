'use client';

import login from '@/actions/login';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React, { useActionState } from 'react';
import Link from 'next/link';
import style from './login-form.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useActionState(login, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label='Usuário' name='username' type='text' />
        <Input label='Senha' name='password' type='password' />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link className={style.perdeu} href='/login/perdeu'>
        Perdeu a senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className='button' href='/login/criar'>Cadastro</Link>
      </div>
    </>
  );
}
