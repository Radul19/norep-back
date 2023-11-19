import {Router} from 'express'
const router = Router()

import {test} from '../controllers/search'


router.get('/', test)

export default router
// module.exports = router
// XRH7J5O2OZJ6T1EGNTONG8PG30PIXJJA