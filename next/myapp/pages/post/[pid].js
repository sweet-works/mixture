import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query;
  console.log(router.query, '============', new Date().getTime());
  return <p>Post: {pid}</p>
}

export default Post