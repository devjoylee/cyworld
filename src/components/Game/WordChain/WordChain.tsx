import { useState } from 'react'
import { GameSection } from '@components/Game'
import styles from './WordChain.module.scss'

export const WordChain = () => {
  const [keyword, setKeyword] = useState('hello')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('Result!')

  const checkResult = () => {
    if (keyword.slice(-1) === value.slice(0, 1)) {
      setResult('Correct!')
      setKeyword(value)
    } else {
      setResult('Wrong!')
    }
  }

  return (
    <GameSection
      name='Word Chain'
      img='https://www.freeiconspng.com/thumbs/toy-train-png/toy-train-png-23.png'
      className={styles.word_chain}
    >
      <p>Keyword : {keyword}</p>
      <div className={styles.input_wrap}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter your word.'
        />
        <button onClick={checkResult}>Go</button>
      </div>
      <span>{result}</span>
    </GameSection>
  )
}
