import { Diary } from '@types'
import styles from './TextEditor.module.scss'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  diary: Diary
}

export const TextEditor = ({ handleChange, diary }: Props) => {
  return (
    <section className={styles.new_diary}>
      <input
        type='text'
        name='title'
        value={diary.title}
        placeholder='Subject'
        onChange={handleChange}
      />
      <textarea name='contents' value={diary.contents} onChange={handleChange} />
    </section>
  )
}
