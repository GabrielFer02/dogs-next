export default async function PerfilUserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const resolvedParam = await Promise.resolve(params);
  return (
    <main>
      <h1>Usuário: {resolvedParam.user}</h1>
    </main>
  );
}
