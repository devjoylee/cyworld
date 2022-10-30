import { GameSection } from '@components/Game'
import { useState } from 'react'
import styles from './WordChain.module.scss'

export const WordChain = () => {
  const [keyword, setKeyword] = useState('코드캠프')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('결과!')

  const checkResult = () => {
    if (keyword.slice(-1) === value.slice(0, 1)) {
      setResult('정답입니다!')
      setKeyword(value)
    } else {
      setResult('오답입니다!')
    }
  }

  return (
    <GameSection
      name='끝말잇기'
      img='https://codecampnumble.shop/images/train.png'
      className={styles.word_chain}
    >
      <p>제시어 : {keyword}</p>
      <div className={styles.input_wrap}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='단어를 입력하세요.'
        />
        <button onClick={checkResult}>입력</button>
      </div>
      <span>{result}</span>
    </GameSection>
  )
}
