export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${process.env.LARAVEL_API_URL}/${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${process.env.LARAVEL_API_KEY}`,
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      throw new Error(`Laravel API error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error instanceof Error ? error.message : "An unknown error occurred");
    throw new Error("Gagal fetch data dari server internal!");
  }
}
