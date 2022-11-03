import { SectionTitle } from '@components/Common'
import styles from './BGMs.module.scss'

export const BGMs = () => {
  return (
    <section className={styles.bgm_list}>
      <SectionTitle title='추억의 BGM' subtitle='TODAY MUSIC' />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkbox}>
              <input type='checkbox' />
            </th>
            <th className={styles.num}>번호</th>
            <th className={styles.title}>곡명</th>
            <th className={styles.artist}>아티스트</th>
          </tr>
        </thead>
        <tbody>
          {BGMList.map(({ id, title, artist }) => (
            <tr key={id}>
              <td className={styles.checkbox}>
                <input type='checkbox' />
              </td>
              <td className={styles.num}>{id}</td>
              <td className={styles.title}>{title}</td>
              <td className={styles.artist}>{artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

const BGMList = [
  { id: 1, title: 'After LIKE', artist: 'IVE (아이브)' },
  { id: 2, title: '사랑스러워', artist: '김종국' },
  { id: 3, title: 'Attention', artist: 'NewJeans' },
  { id: 4, title: 'Love Love Love', artist: '에픽하이' },
  { id: 5, title: 'Pink Venom', artist: 'BLACKPINK' },
  { id: 6, title: '눈의꽃', artist: '박효신' },
  { id: 7, title: 'Hype boy', artist: 'NewJeans' },
  { id: 8, title: 'FOREVER 1', artist: '소녀시대' },
  { id: 9, title: '그때 그 순간 그대로', artist: 'WSG워너비' },
  { id: 10, title: '애인있어요', artist: '이은미' },
]
