import { Container, CssBaseline } from "@mui/material"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "react-toastify/dist/ReactToastify.min.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <Container>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Container>
)
