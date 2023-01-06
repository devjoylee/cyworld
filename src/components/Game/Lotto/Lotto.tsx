import { useCallback, useEffect, useState } from 'react'
import { GameSection } from '@components/Game'
import styles from './Lotto.module.scss'

export const Lotto = () => {
  const [lotto, setLotto] = useState<number[]>([])

  const getRandomNumber = () => Math.floor(Math.random() * 45) + 1

  const makeLotto = useCallback(() => {
    let n
    let nums = [] as number[]
    for (let i = 0; i < 6; i++) {
      do {
        n = getRandomNumber()
      } while (nums.includes(n))
      nums.push(n)
    }
    setLotto(nums.sort((a, b) => a - b))
  }, [])

  useEffect(() => {
    makeLotto()
  }, [makeLotto])

  return (
    <GameSection
      name='LOTTO'
      img='https://media.istockphoto.com/id/460783997/vector/lottery-close.jpg?s=612x612&w=0&k=20&c=k5koZqUgDfeXcZSVcYoAqZ27lgKATXVyvhuiSldBItY='
      className={styles.lotto}
    >
      <p>Click the button</p>
      <ul>
        {lotto.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={makeLotto}>Button</button>
    </GameSection>
  )
}
