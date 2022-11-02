import { SectionTitle, SEO } from '@components/Common'
import { DiaryList, NewDiaryButton } from '@components/Diary'

export default function Diary() {
  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' subtitle='TODAY STORY' mb />
      <NewDiaryButton />
      <DiaryList />
    </>
  )
}
