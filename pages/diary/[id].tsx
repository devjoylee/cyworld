import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_DIARY, GET_DIARY_ITEM } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { EditDeleteButton, ViewDiary } from '@components/Diary'
import { Diary } from '@types'

export default function DiaryContent() {
  const router = useRouter()
  const id = router.query.id as string

  // Fetching diary contents
  const { data, loading } = useQuery(GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })
  const contents = !loading ? (data.fetchBoard as Diary) : defaultContent

  // Deleting diary contents
  const [mutateTriggerFunction] = useMutation(DELETE_DIARY)
  const deleteDiary = async () => {
    if (confirm('다이어리를 삭제하시겠습니까?')) {
      await mutateTriggerFunction({ variables: { number: Number(id) } })
      alert('삭제 성공!')
      router.push('/diary')
    }
  }

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' />
      <ViewDiary diaryData={contents} />
      <EditDeleteButton id={id} deleteDiary={deleteDiary} />
    </>
  )
}

const defaultContent = {
  title: '',
  contents: '',
  number: 0,
  createdAt: '',
}
