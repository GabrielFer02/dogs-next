import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Resete a sua senha',
};

export default async function ResetarPage({
  searchParams,
}: {
  searchParams: Promise<{ key: string; login: string }>;
}) {
  const resolvedsearchParams = await Promise.resolve(searchParams);

  return (
    <div className='animeLeft'>
      <h1 className='title'>Resete a senha</h1>
      <LoginResetarForm keyToken={resolvedsearchParams.key} login={resolvedsearchParams.login}/>
    </div>
  );
}
