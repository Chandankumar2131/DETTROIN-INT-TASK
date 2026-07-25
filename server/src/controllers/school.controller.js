import { schoolService } from '../services/school.service.js'

export const getSchool = (_request, response) => response.json({ data: schoolService.getProfile() })
export const getNavigation = (_request, response) => response.json({ data: schoolService.getNavigation() })
export const getNews = (_request, response) => response.json({ data: schoolService.getNews() })
export const createEnquiry = (request, response) => {
  const { name, email, message } = request.body
  if (!name || !email || !message) return response.status(400).json({ message: 'Name, email and message are required.' })
  return response.status(201).json({ message: 'Your enquiry has been received.' })
}
