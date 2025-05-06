const BASE = '/api'

export const api = async (url, params) => {  
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