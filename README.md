<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://user-images.githubusercontent.com/68415905/199704645-1a449c3c-a2b5-4e32-8f5c-1f8f7c1d22ce.png" alt="Logo" width="50" >
  <h1>Cyworld Clone Project</h1>
  <p>
    <a href="https://cyworld-nb.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
</details>

## About The Project

> It is a clone project that implements Cyworld website which is a social network platform in Korea. You can create, read, update, delete (**CRUD**) your own diary and share with your friends here. This project has been provided [figma design](https://www.figma.com/file/Tn34cPQR6hGtDxnKIf66Cv/%EB%84%98%EB%B8%94-%EC%8B%B8%EC%9D%B4%EC%9B%94%EB%93%9C) and [backend API by NUMBLE](http://practice.codebootcamp.co.kr/graphql) which uses **GraphQL as its communication layer**.

- Production Period : 2022.10.14 - 2022.11.03

### Example of APIs

- C : `createBoard`
- R : `fetchBoard`(single) / `fetchBoards`(list)
- U : `updateBoard`
- D : `deleteBoard`

### Folder Structure

```markdown
public
├── images
└── icons

pages  
├── diary
│ ├── [id]
│ │ ├── edit.tsx --------------- diary/12030/edit
│ │ └── index.tsx -------------- diary/12030
│ ├── new.tsx ------------------ diary/new
│ └── index.tsx ---------------- diary
├── game
│ └── index.tsx ---------------- game
├── \_app.tsx
├── \_document.tsx
└── index.tsx ------------------ home

src  
├── components
├── styles
├── hooks
├── queries
├── types
└── utils
```

<br/>

## Built With

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/sass-CF649A?style=for-the-badge&logo=sass&logoColor=white" />

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/cyworld.git
npm install
npm run dev
```

<br/>

## Main Features

### 1. SCSS-modules in NextJS

- Created a `.module.scss` file in each component folder for styling.
- Defined `mixins` and `variables` that can be re-used throughout components.
- Code Preview

```jsx
// SectionTitle.tsx
import styles from './SectionTitle.module.scss'

export const SectionTitle = () => {
  return <h2 className={styles.section_title}>{title}</h2>
}
```

```jsx
// SectionTitle.module.scss
@import '@styles/variables.scss';

.section_title {
  display: flex;
  align-items: center;
  color: $main-color-1;
}
```

<br/>

### 2. `usePost` hook

- Created **a custom hook** in order to handle diary contents with a validate function.
- Code Preview

```tsx
// hooks/usePost.ts
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
```

<br/>

### 3. CRUD Diary Items with GraphQL

- **Create** a Diary

```tsx
// pages/diary/new.tsx
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'

export default function DiaryNew() {
  const router = useRouter()
  const { diary, handleChange, validate } = usePost()
  const [createDiary] = useMutation(Q.CREATE_DIARY)

  const handleSubmit = async () => {
    if (validate()) {
      try {
        const result = await createDiary({
          variables: {
            writer: 'Joy',
            title: diary.title,
            contents: diary.contents,
          },
          onCompleted: () => {
            alert('You have successfully added a new diary!')
          },
        })
        router.push(`/diary/${result.data.createBoard.number}`)
      } catch (error) {
        alert('Something went wrong. Please try again.')
      }
    }
  }

  return (
    //...
    <SubmitButton type='add' handleSubmit={handleSubmit} />
  )
}
```

- **Read** Diaries

```tsx
// pages/diary/index.tsx
import { useQuery } from '@apollo/client'
import { GET_DIARY_LIST } from '@queries/diary'

export default function DiaryPage() {
  const { data, loading, refetch } = useQuery(GET_DIARY_LIST, { variables: { page: 1 } })
  const diaryData = !loading && data ? (data.fetchBoards.slice(0, 5) as Diary[]) : []

  useEffect(() => {
    refetch()
  })

  return (
    //...
    <ul className={styles.diary_list}>
      {diaryData?.map((data) => (
        <DiaryItem key={data.number} diaryData={data} />
      ))}
    </ul>
  )
}
```

- **Update** a Diary

```tsx
// pages/diary/[id]/edit.tsx
import { useMutation, useQuery } from '@apollo/client'
import * as Q from '@queries/diary'

export default function DiaryEdit() {
  const router = useRouter()
  const id = router.query.id as string
  const { diary, setDiary, handleChange, validate } = usePost()

  // Fetching diary contents
  const { data, loading, refetch } = useQuery(Q.GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })

  const [updateDiary] = useMutation(Q.UPDATE_DIARY)

  const handleSubmit = async () => {
    if (validate()) {
      try {
        await updateDiary({
          variables: {
            number: Number(id),
            writer: 'Joy',
            title: diary.title,
            contents: diary.contents,
          },
          onCompleted: () => {
            alert('Edited successfully!')
            refetch()
            router.push(`/diary/${id}`)
          },
        })
      } catch (error) {
        alert('Something went wrong. Please try again.')
      }
    }
  }

  useEffect(() => {
    const diaryData = !loading ? (data.fetchBoard as Diary) : defaultContent
    setDiary({
      title: diaryData.title,
      contents: diaryData.contents,
    })
  }, [data, loading, setDiary])

  return (
			// ...
      <SubmitButton type='edit' handleSubmit={handleSubmit} />
}
```

- **Delete** a diary

```tsx
// pages/diary/[id]/index.tsx
export default function DiaryContent() {
  const router = useRouter()
  const id = router.query.id as string

  // Fetching diary contents
  const { data, loading } = useQuery(Q.GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })
  const diaryData = !loading && data ? (data?.fetchBoard as Diary) : defaultContent

  // Deleting diary contents
  const [deleteDiary] = useMutation(Q.DELETE_DIARY)
  const deleteAction = async () => {
    if (confirm('Are you sure to delete this?')) {
      await deleteDiary({
        variables: { number: Number(id) },
        onCompleted: () => {
          alert('Deleted successfully!')
          router.push('/diary')
        },
        refetchQueries: [{ query: Q.GET_DIARY_LIST }],
      })
    }
  }

  return (
    <>
      // ...
      <ViewDiary diaryData={diaryData} />
      <EditDeleteButton id={id} deleteDiary={deleteAction} />
    </>
  )
}
```

<br>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
