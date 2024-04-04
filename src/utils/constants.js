const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_VERCEL_URL

// const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : process.env.NEXT_PUBLIC_API_PATH

const API_URL = process.env.NEXT_PUBLIC_API_PATH;

export {BASE_URL, API_URL}
