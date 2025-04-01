import photosGet, { Photo } from '@/actions/photos-get';
import Feed from '@/components/Feed/feed';

export default async function PerfilUserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { data } = await photosGet({ user: resolvedParams.user });

  if (!data) return null;
  return (
    <section className='container mainSection'>
      <h1 className='title'>{resolvedParams.user}</h1>
      <Feed photos={data as Photo[]} user={resolvedParams.user} />
    </section>
  );
}
