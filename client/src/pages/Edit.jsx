import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Edit() {
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:3000/vendors/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <>
      <div>Edit</div>
    </>
  )
}
