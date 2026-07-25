const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(error.message || 'Request failed')
  }
  return response.json()
}

export const schoolService = {
  getProfile: () => request('/school'),
  getNavigation: () => request('/navigation'),
  getNews: () => request('/news'),
  submitEnquiry: (payload) => request('/enquiries', { method: 'POST', body: JSON.stringify(payload) }),
}
