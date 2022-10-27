import styles from './SectionTitle.module.scss'

export const SectionTitle = ({ title }: { title: string }) => {
  return <h2 className={styles.section_title}>{title}</h2>
}
