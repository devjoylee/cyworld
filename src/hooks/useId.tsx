import { useQuery } from '@apollo/client'
import { GET_DIARY_LIST } from '@queries/diary'

export const useId = () => {
  const { data, loading } = useQuery(GET_DIARY_LIST, { variables: { page: 1 } })
  const newId = !loading ? data.fetchBoards[0].number : 0
  return newId + 1
}
