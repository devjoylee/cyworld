import { ButtonWrap } from '@components/Common'
import Link from 'next/link'
import styles from './Buttons.module.scss'

interface Props {
  id: string
  deleteDiary: () => void
}

export const EditDeleteButton = ({ id, deleteDiary }: Props) => {
  return (
    <>
      <ButtonWrap>
        <button className={styles.btn1}>
          <Link href={`/diary/${id}/edit`}>수정하기</Link>
        </button>
        <button className={styles.btn1} onClick={deleteDiary}>
          삭제하기
        </button>
      </ButtonWrap>
      <Link href='/diary'>
        <span className={styles.back_btn}> 목록으로</span>
      </Link>
    </>
  )
}
