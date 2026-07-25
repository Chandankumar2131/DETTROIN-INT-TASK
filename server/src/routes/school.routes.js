import { Router } from 'express'
import { createEnquiry, getNavigation, getNews, getSchool } from '../controllers/school.controller.js'

const router = Router()
router.get('/school', getSchool)
router.get('/navigation', getNavigation)
router.get('/news', getNews)
router.post('/enquiries', createEnquiry)

export default router
