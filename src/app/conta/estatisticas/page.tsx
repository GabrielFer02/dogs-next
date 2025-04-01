import statsGet, { StatsData } from '@/actions/stats-get';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
  },
);

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();
  const resolvedData = (await data) as StatsData[];

  if (!resolvedData) return null;

  return (
    <section>
      <ContaEstatisticas data={resolvedData} />
    </section>
  );
}
