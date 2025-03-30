'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import passwordReset from '@/actions/password-reset';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action}>
      <Input label='Nova Senha' name='password' type='password' />
      <input type="hidden" name='login' value={login}/>
      <input type="hidden" name='key' value={keyToken}/>
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
