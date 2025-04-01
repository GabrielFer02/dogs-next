import photoGet, { PhotoData } from '@/actions/photo-get';
import FeedModal from '@/components/Feed/feed-modal';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  id: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<FotoIdParams>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const { data } = await photoGet(resolvedParams.id);
  const resolvedData = data as PhotoData;
  if (!resolvedData) return { title: 'Fotos' };
  return {
    title: resolvedData.photo.title,
  };
}

export default async function FotoIdPage({
  params,
}: {
  params: Promise<FotoIdParams>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const { data } = await photoGet(resolvedParams.id);

  if (!data) return notFound();
  return <FeedModal photo={data as PhotoData} />;
}
