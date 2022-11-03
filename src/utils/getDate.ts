export const getDate = (time: string) => {
  const newDate = new Date(time)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
  const date = newDate.getDate().toString().padStart(2, '0')
  return time ? `${year}-${month}-${date}` : ''
}
