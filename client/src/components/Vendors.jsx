import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

import { useDelete } from "../hooks/useDelete"
import { useGet } from "../hooks/useGet"

export default function Vendors() {
  const { vendorData, fetchVendors, error } = useGet()
  const { handleDelete } = useDelete()

  const handleDeleteAndRefresh = async (id) => {
    await handleDelete(id)
    fetchVendors()
  }

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
          to={`/edit/${ele._id}`}
        >
          Edit
        </RouterLink>
      </TableCell>
      <TableCell align="right">
        <RouterLink
          to="#"
          style={{ textDecoration: "none", color: "red" }}
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this vendor?")
            ) {
              handleDeleteAndRefresh(ele._id)
            }
          }}
        >
          Delete
        </RouterLink>
      </TableCell>
    </TableRow>
  ))

  return (
    <>
      {vendorData ? (
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
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <CircularProgress size={"50px"} />
        </Box>
      )}
    </>
  )
}
