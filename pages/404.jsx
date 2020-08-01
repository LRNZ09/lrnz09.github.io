import { useRouter } from 'next/router'
import { useEffectOnce } from 'react-use'

const NotFound = () => {
  const router = useRouter()

  useEffectOnce(() => {
    router.replace('/')
  })

  return null
}

export default NotFound
