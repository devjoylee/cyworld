import { gql } from '@apollo/client'

export const GET_DIARY_LIST = gql`
  query FetchBoards($page: Int!) {
    fetchBoards(page: $page) {
      title
      createdAt
      number
    }
  }
`
