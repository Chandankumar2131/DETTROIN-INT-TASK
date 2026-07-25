import { navigation, news, school } from '../data/school.data.js'

export const schoolService = {
  getProfile: () => school,
  getNavigation: () => navigation,
  getNews: () => news,
}
