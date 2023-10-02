import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"

import { useDelete } from "../hooks/useDelete"
import { useGet } from "../hooks/useGet"

export default function Vendors() {
  const { vendorData, fetchVendors, error } = useGet()
  const { handleDelete } = useDelete()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const handleDeleteAndRefresh = async (id) => {
    await handleDelete(id)
    fetchVendors()
  }

  const renderedData = vendorData
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((ele) => (
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
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={vendorData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
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
