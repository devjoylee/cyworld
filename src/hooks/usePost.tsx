import { useState } from 'react'

export const usePost = () => {
  const [diary, setDiary] = useState({ title: '', contents: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    if (!diary.title) {
      alert('Please enter the subject')
    } else if (!diary.contents) {
      alert('Please enter the contents')
    }
    return diary.title && diary.contents
  }

  return { diary, setDiary, handleChange, validate }
}
