import axios from "axios"
import { useQuery } from "react-query"

export const useQueryItems = () => {
  return useQuery('items', () => axios.get('https://60b0a7c81f26610017ffed12.mockapi.io/api/food'));
}