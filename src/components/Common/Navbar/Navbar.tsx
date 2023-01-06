import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'

const nav = [
  { name: 'HOME', path: '' },
  { name: 'GAME', path: 'game' },
  { name: 'DIARY', path: 'diary' },
]

export const Navbar = () => {
  const router = useRouter()
  return (
    <nav className={styles.navbar}>
      {nav.map(({ name, path }) => (
        <Link href={'/' + path} key={name}>
          <a className={router.pathname === '/' + path ? styles.active : ''}>{name}</a>
        </Link>
      ))}
    </nav>
  )
}
