export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
};

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/GITHUB_USERNAME/repos?sort=updated&per_page=6",
    {
      next: { revalidate: 3600 }
    }
  );

  if (!res.ok) return [];
  return res.json();
}
