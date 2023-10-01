import { Route, Routes } from "react-router-dom"

import AddVendor from "./pages/AddVendor"
import Edit from "./pages/Edit"
import Home from "./pages/Home"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-vendor" element={<AddVendor />} />
      <Route path="/:id" element={<Edit />} />
    </Routes>
  )
}
