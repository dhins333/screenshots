import { toastQueue } from "../components/Toast/Toast"

const BASE = '/api'

export const api = async (url, params) => {
  try {
    url = `${BASE}/${url}${params ? `?${new URLSearchParams(params).toString()}` : ''}`
  
    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json'
      }
    })

    if (!response.ok) throw new Error()

    const data = await response.json()

    return data
  }
  catch {
    toastQueue.add('Some Error Occurred', { timeout: 5000 })
    return null
  }
}