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

export const GET_DIARY_ITEM = gql`
  query FetchBoard($number: Int!) {
    fetchBoard(number: $number) {
      title
      createdAt
      contents
      number
    }
  }
`

export const CREATE_DIARY = gql`
  mutation CreateBoard($writer: String!, $title: String!, $contents: String!) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`
