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
      alert('제목을 입력하세요')
    } else if (!diary.contents) {
      alert('내용을 입력하세요')
    }
    return diary.title && diary.contents
  }

  return { diary, setDiary, handleChange, validate }
}
