import styles from './SectionTitle.module.scss'

interface Props {
  title: string
  subtitle?: string
  mb?: boolean
  diary?: string
}

export const SectionTitle = ({ title, subtitle, mb, diary }: Props) => {
  return (
    <h2 className={styles.section_title} style={{ marginBottom: mb ? '16px' : '0' }}>
      {title}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {diary && <span className={styles.diary}>{diary}</span>}
    </h2>
  )
}
