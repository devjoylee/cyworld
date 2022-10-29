import styles from './SectionTitle.module.scss'

interface Props {
  title: string
  subtitle?: string
  mb?: boolean
}

export const SectionTitle = ({ title, subtitle, mb }: Props) => {
  return (
    <h2 className={styles.section_title} style={{ marginBottom: mb ? '16px' : '0' }}>
      {title}
      {subtitle && <span>{subtitle}</span>}
    </h2>
  )
}
