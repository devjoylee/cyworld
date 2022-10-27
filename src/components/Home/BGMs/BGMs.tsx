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
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>1</td>
            <td className={styles.title}>After LIKE</td>
            <td className={styles.artist}>IVE (아이브)</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>2</td>
            <td className={styles.title}>사랑스러워</td>
            <td className={styles.artist}>김종국</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>3</td>
            <td className={styles.title}>Attention</td>
            <td className={styles.artist}>NewJeans</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>4</td>
            <td className={styles.title}>Love Love Love</td>
            <td className={styles.artist}>에픽하이</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>5</td>
            <td className={styles.title}>Pink Venom</td>
            <td className={styles.artist}>BLACKPINK</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>6</td>
            <td className={styles.title}>눈의꽃</td>
            <td className={styles.artist}>박효신</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>7</td>
            <td className={styles.title}>Hype boy</td>
            <td className={styles.artist}>NewJeans</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>8</td>
            <td className={styles.title}>FOREVER 1</td>
            <td className={styles.artist}>소녀시대</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>9</td>
            <td className={styles.title}>그때 그 순간 그대로</td>
            <td className={styles.artist}>WSG워너비</td>
          </tr>
          <tr>
            <td className={styles.checkbox}>
              <input type='checkbox' />
            </td>
            <td className={styles.num}>10</td>
            <td className={styles.title}>애인있어요</td>
            <td className={styles.artist}>이은미</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
