import { AppBar, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <AppBar
      sx={{ height: "60px", my: "15px", borderRadius: "10px" }}
      position="sticky"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Typography
              variant="div"
              sx={{
                color: "white",
                padding: "15px",
                marginLeft: "20px",
              }}
              component={"h2"}
            >
              Home
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Typography
              variant="div"
              sx={{
                color: "white",
                padding: "15px",
                marginRight: "10px",
              }}
            >
              Vendor List
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/add-vendor"}>
            <Typography
              variant="div"
              sx={{
                color: "white",
                padding: "15px",
                marginRight: "10px",
              }}
            >
              Add Vendor
            </Typography>
          </Link>
        </Box>
      </Box>
    </AppBar>
  )
}
