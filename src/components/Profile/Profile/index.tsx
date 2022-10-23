import styles from './Profile.module.css'
import { ProfileInfo } from '../ProfileInfo'
import { TodayFeeling } from '../TodayFeeling'

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className='container'>
        <div className={styles.myphoto}>
          <img src='/images/profile.png' alt='' />
        </div>
        <div className={styles.wrapper}>
          <ProfileInfo />
          <TodayFeeling />
        </div>
      </div>
    </div>
  )
}
