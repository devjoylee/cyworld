import Link from 'next/link'
import { ButtonWrap } from '@components/Common'
import styles from './Buttons.module.scss'

interface Props {
  type: string
  handleSubmit: () => Promise<void>
}

export const SubmitButton = ({ type, handleSubmit }: Props) => {
  return (
    <ButtonWrap>
      <button className={styles.btn2} onClick={handleSubmit}>
        {type === 'add' ? '등록' : '수정'}하기
      </button>
      <button className={styles.btn2}>
        <Link href='/diary'>취소하기</Link>
      </button>
    </ButtonWrap>
  )
}
