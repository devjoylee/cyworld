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
            alert('You have successfully added a new diary!')
          },
        })
        router.push(`/diary/${result.data.createBoard.number}`)
        //
      } catch (error) {
        alert('Something went wrong. Please try again.')
      }
    }
  }

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' diary='Create' />
      <TextEditor handleChange={handleChange} diary={diary} />
      <SubmitButton type='add' handleSubmit={handleSubmit} />
    </>
  )
}
