import styles from './SectionTitle.module.scss'

interface Props {
  title: string
  subtitle?: string
}

export const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <h2 className={styles.section_title}>
      {title}
      {subtitle && <span>{subtitle}</span>}
    </h2>
  )
}
