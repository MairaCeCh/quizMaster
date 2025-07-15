
import QuizPage from '@/components/quiz/QuizPage'

interface PageProps {
  params: Promise<{ cId: string }>
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const cid = decodeURIComponent(resolvedParams.cId)

  return <QuizPage cid={cid} />
}

export default Page
