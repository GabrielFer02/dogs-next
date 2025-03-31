import photoGet, { PhotoData } from '@/actions/photo-get';
import PhotoContent from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  const resolvedData = data as PhotoData;
  if (!data) return { titlte: 'Fotos' };
  return {
    title: resolvedData.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  const resolvedData = data as PhotoData;
  if (!data) return notFound();
  return (
    <section className='container mainContainer'>
      <PhotoContent data={resolvedData} single={true} />
    </section>
  );
}
