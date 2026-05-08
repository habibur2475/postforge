const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = {
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  },

  auth: {
    login: (data: { email: string; password: string }) =>
      api.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    register: (data: { email: string; password: string }) =>
      api.request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  user: {
    profile: () => api.request('/user/profile'),
  },

  post: {
    create: (data: any) => api.request('/post', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    list: () => api.request('/post'),
  },
};
