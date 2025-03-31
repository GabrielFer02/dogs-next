import photosGet, { Photo } from '@/actions/photos-get';
import Feed from '@/components/Feed/feed';

export default async function Home() {
  const { data } = await photosGet();
  const resolvedPhotos = data as Photo[];

  return (
    <section className='container mainContainer'>
      <Feed photos={resolvedPhotos} />
    </section>
  );
}
