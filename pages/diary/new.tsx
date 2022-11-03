import { SectionTitle, SEO } from '@components/Common'
import { NewDiary, SubmitButton } from '@components/Diary'

export default function DiaryNew() {
  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary | 글 등록' />
      <NewDiary />
      <SubmitButton />
    </>
  )
}
