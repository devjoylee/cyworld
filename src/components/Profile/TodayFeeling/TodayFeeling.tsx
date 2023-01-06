import styles from './TodayFeeling.module.scss'

export const TodayFeeling = () => {
  return (
    <div className={styles.today_feel}>
      <h3>How are you today?</h3>
      <select className={styles.option_box}>
        <option value='feel1'>Happy 😍</option>
        <option value='feel2'>Sad ☹️</option>
        <option value='feel3'>Sleepy 😴</option>
      </select>
    </div>
  )
}
