export default async function FotoIdPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const resolvedParam = await Promise.resolve(params);

  return (
    <main>
      <h1>Foto id: {resolvedParam.id}</h1>
    </main>
  );
}
