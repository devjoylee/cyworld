import styles from './TodayFeeling.module.scss'

export const TodayFeeling = () => {
  return (
    <div className={styles.today_feel}>
      <h3>오늘의 기분</h3>
      <select className={styles.option_box}>
        <option value='feel1'>기쁨 😍</option>
        <option value='feel2'>우울 ☹️</option>
        <option value='feel3'>졸림 😴</option>
      </select>
    </div>
  )
}
