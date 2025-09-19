import QuizPage from '@/components/quiz/QuizPage'

interface PageProps {
  params: Promise<{ cId: string }>
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const cid = decodeURIComponent(resolvedParams.cId)

  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <QuizPage cid={cid}/>
    </div>
  )
}

export default Page