export async function apiFetch(endpoint: string, options: RequestInit = {}, version: number = 1) {
  try {
    const apiURL = version === 2 ? process.env.LARAVEL_API_URL_V2 : process.env.LARAVEL_API_URL;
    const apiKey = version === 2 ? process.env.LARAVEL_API_KEY_V2 : process.env.LARAVEL_API_KEY;

    const res = await fetch(`${apiURL}/${endpoint}`, {
      ...options,
      body: options?.body && options.body instanceof FormData ? options.body : JSON.stringify(options.body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...(options.headers || {}),
      },
    });

    let data = await res.json()

    return { status: res.status, ...data }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}