export const queryKeys = {
  //통신 테스트(json placeholder)
  posts: {
    all: ["posts"] as const,
    detail: (id: string) => ["posts", id] as const,
  },
  users: {
    user: ["user"] as const,
  },
} as const;
