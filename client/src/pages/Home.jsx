import { Link } from "react-router-dom"
import Vendors from "../components/Vendors"

export default function Home() {
  return (
    <>
      <Link to={"/add-vendor"}>Add Vendor</Link>
      <Vendors />
    </>
  )
}
