import { Container, CssBaseline } from "@mui/material"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <Container>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Container>
)
