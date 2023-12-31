import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useParams } from "react-router-dom"

import { useGetById } from "../hooks/useGet"
import { usePatch } from "../hooks/usePatch"
import { usePost } from "../hooks/usePost"

export default function AddVendor() {
  const InitialState = {
    vendorName: "",
    bankAccNum: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipCode: "",
  }
  const { postData, data, err } = usePost()
  const { patchData } = usePatch()
  const { fetchById, data: idData } = useGetById()
  const [input, setInput] = useState(InitialState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { id } = useParams()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }
  if (id) {
    fetchById(id)
  }
  useEffect(() => {
    if (idData) {
      setInput(idData)
    }
  }, [idData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      await patchData(input, id)
    } else {
      await postData(input)
    }
    setInput(InitialState)
    setIsSubmitted(true)
  }

  if (data && isSubmitted) {
    setIsSubmitted(false)
    console.log(data.message)
    toast.success("Sucessful")
  }

  return (
    <>
      <ToastContainer />
      <Box component="form" onSubmit={handleSubmit} autoComplete="off" m={5}>
        <Typography
          textAlign={"center"}
          variant="h4"
          component="div"
          gutterBottom
        >
          Vendor Banking Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Vendor Name"
              name="vendorName"
              required
              fullWidth
              value={input.vendorName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bank Name"
              name="bankName"
              required
              fullWidth
              value={input.bankName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Bank Acc Number"
              name="bankAccNum"
              required
              fullWidth
              type="number"
              value={input.bankAccNum}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address Line 1"
              name="addressLine1"
              fullWidth
              value={input.addressLine1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address Line 2"
              name="addressLine2"
              fullWidth
              value={input.addressLine2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="City"
              variant="outlined"
              name="city"
              fullWidth
              value={input.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Country"
              name="country"
              fullWidth
              value={input.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Zip Code"
              name="zipCode"
              type="number"
              fullWidth
              value={input.zipCode}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="outlined"
          fullWidth
          size="large"
          sx={{ my: "2rem" }}
        >
          Submit
        </Button>
      </Box>
    </>
  )
}
