import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const imageToBase64 = async (url, type) => {
  const backgroundResponse = await fetch(url)
  const backgroundBuffer = await backgroundResponse.arrayBuffer()
  const backgroundSrc = Buffer.from(backgroundBuffer).toString('base64')
  return `data:image/${type || 'webp'};base64,${backgroundSrc}`
}
