export default function apiError(error: unknown): {
  data: unknown;
  ok: boolean;
  error: string;
} {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else {
    return { data: null, ok: false, error: 'Erro genérico' };
  }
}
