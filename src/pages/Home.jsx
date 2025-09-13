import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Home() {

  const query = useQuery({
    queryFn: axios.get('http://localhost:8000/category'),
    queryKey: 'getCategories'
  })

  console.log(query)

  return (
    <div>
      home
    </div>
  )
}