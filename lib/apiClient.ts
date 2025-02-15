export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${process.env.LARAVEL_API_URL}/${endpoint}`, {
      ...options,
      body: options?.body && options.body instanceof FormData ? options.body : JSON.stringify(options.body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${process.env.LARAVEL_API_KEY}`,
        ...(options.headers || {}),
      },
    });

    let data = await res.json()

    return { status: res.status, ...data }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}