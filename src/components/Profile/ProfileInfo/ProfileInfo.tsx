import styles from './ProfileInfo.module.scss'

export const ProfileInfo = () => {
  return (
    <ul className={styles.profile_info}>
      <li>
        <img src='/icons/name.svg' alt='icon' />
        Joy Lee
      </li>
      <li>
        <img src='/icons/phone.svg' alt='icon' />
        604-358-9672
      </li>
      <li>
        <img src='/icons/email.svg' alt='icon' />
        joylee@gmail.com
      </li>
      <li>
        <img src='/icons/insta.svg' alt='icon' />
        hellojoy
      </li>
    </ul>
  )
}
