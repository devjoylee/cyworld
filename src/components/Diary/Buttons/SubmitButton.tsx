import Link from 'next/link'
import { ButtonWrap } from '@components/Common'
import styles from './Buttons.module.scss'

interface Props {
  handleSubmit: () => Promise<void>
}

export const SubmitButton = ({ handleSubmit }: Props) => {
  return (
    <ButtonWrap>
      <button className={styles.btn2} onClick={handleSubmit}>
        등록하기
      </button>
      <button className={styles.btn2}>
        <Link href='/diary'>취소하기</Link>
      </button>
    </ButtonWrap>
  )
}
