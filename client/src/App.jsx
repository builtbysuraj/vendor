import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import AddVendor from "./pages/AddVendor"
import Home from "./pages/Home"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-vendor" element={<AddVendor />} />
        <Route path="/edit/:id" element={<AddVendor />} />
      </Routes>
    </>
  )
}
