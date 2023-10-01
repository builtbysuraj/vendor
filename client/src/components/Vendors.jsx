import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

import { useGet } from "../hooks/useGet"

export default function Vendors() {
  const { vendorData, error } = useGet()

  const renderedData = vendorData?.map((ele) => (
    <TableRow
      sx={{
        "& .MuiTableCell-root": {
          fontSize: "1rem",
        },
      }}
      key={ele._id}
    >
      <TableCell component="th" scope="row">
        {ele.vendorName}
      </TableCell>
      <TableCell align="right">{ele.bankAccNum}</TableCell>
      <TableCell align="right">{ele.bankName}</TableCell>
      <TableCell align="right">
        <RouterLink
          style={{ textDecoration: "none", color: "blue" }}
          to={`/${ele._id}`}
        >
          Edit
        </RouterLink>
      </TableCell>
      <TableCell align="right">
        <RouterLink style={{ textDecoration: "none", color: "red" }}>
          Delete
        </RouterLink>
      </TableCell>
    </TableRow>
  ))

  return (
    <>
      <TableContainer component={Paper} style={{ fontSize: "2rem" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  fontSize: "1.1rem",
                  fontWeight: "bold ",
                },
              }}
            >
              <TableCell>Vendor Name</TableCell>
              <TableCell align="right">Bank Acc Number</TableCell>
              <TableCell align="right">Bank Name</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderedData}</TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
