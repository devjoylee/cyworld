import { ProfileInfo, TodayFeeling } from '@components/Profile'
import styles from './Profile.module.scss'

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
