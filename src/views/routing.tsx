import { routing } from '@/views/utils/routing'
import { Index } from '@/views/pages'

export const associatedUrl = [
  {
    path: 'index',
    component: <Index />
  }
]

export default routing(associatedUrl)
