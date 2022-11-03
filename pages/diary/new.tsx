import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { SectionTitle, SEO } from '@components/Common'
import { SubmitButton, TextEditor } from '@components/Diary'
import { usePost } from '@hooks/usePost'
import * as Q from '@queries/diary'

export default function DiaryNew() {
  const router = useRouter()
  const { diary, handleChange, validate } = usePost()
  const [createDiary] = useMutation(Q.CREATE_DIARY)

  const handleSubmit = async () => {
    if (validate()) {
      try {
        const result = await createDiary({
          variables: {
            writer: 'Joy',
            title: diary.title,
            contents: diary.contents,
          },
          onCompleted: () => {
            alert('다이어리 등록 성공!')
          },
        })
        router.push(`/diary/${result.data.createBoard.number}`)
        //
      } catch (error) {
        alert('문제가 발생했습니다')
      }
    }
  }

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' diary='글 등록' />
      <TextEditor handleChange={handleChange} diary={diary} />
      <SubmitButton type='add' handleSubmit={handleSubmit} />
    </>
  )
}
