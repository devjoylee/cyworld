import { SectionTitle, SEO } from '@components/Common'
import { DiaryList } from '@components/Diary'

export default function Diary() {
  return (
    <div>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' subtitle='TODAY STORY' mb />
      <DiaryList />
    </div>
  )
}
