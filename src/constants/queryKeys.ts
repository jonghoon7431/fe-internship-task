export const API_URL = import.meta.env.VITE_API_URL;

export const queryKeys = {
  //통신 테스트(json placeholder)
  posts: {
    all: ["posts"] as const,
    detail: (id: string) => ["posts", id] as const,
  },
  //   users: {
  //     all: ['users'] as const,
  //     detail: (id: string) => ['users', id] as const,
  //     me: ['users', 'me'] as const,
  //   },
  //   auth: {
  //     session: ['auth', 'session'] as const,
  //   },
} as const;
