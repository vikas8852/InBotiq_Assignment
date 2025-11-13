// api.ts - Simple API client for frontend to talk to backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

type JsonRecord = Record<string, unknown>;

type ApiResponse<T> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

async function request<T>(path: string, options: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      credentials: 'include',
    });

    const isJson = res.headers.get('content-type')?.includes('application/json');
    const body = isJson ? await res.json() : undefined;

    if (!res.ok) {
      const message = (body as JsonRecord | undefined)?.message as string | undefined;
      const error = (body as JsonRecord | undefined)?.error as string | undefined;
      return { ok: false, status: res.status, error: message || error || 'Request failed' };
    }

    return { ok: true, status: res.status, data: body as T };
  } catch (err) {
    return { ok: false, status: 0, error: (err as Error).message };
  }
}

export async function apiSignup(input: { name: string; email: string; password: string; role?: 'USER' | 'ADMIN' }): Promise<ApiResponse<{ token?: string }>> {
  return request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      password: input.password,
      role: input.role || 'USER',
    }),
  });
}

export async function apiLogin(input: { email: string; password: string }): Promise<ApiResponse<{ token: string }>> {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

export async function apiMe(token?: string): Promise<ApiResponse<{ id: string; name: string; email: string; role: string }>> {
  const res = await request<{ user: { id: string; name: string; email: string; role: string } }>('/auth/me', {
    method: 'GET',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  if (!res.ok) return res as unknown as ApiResponse<{ id: string; name: string; email: string; role: string }>; 

  return {
    ok: true,
    status: res.status,
    data: res.data?.user,
  };
}

export { API_URL };
