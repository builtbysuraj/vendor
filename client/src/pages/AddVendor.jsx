import { Box, Button, Grid, TextField, Typography } from "@mui/material"

import { usePost } from "../hooks/usePost"

export default function AddVendor() {
  const { postData, data, err } = usePost()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const formData = Object.fromEntries(fd.entries())
    const {
      vendorName,
      bankAccNum,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode,
    } = formData
    await postData(
      vendorName,
      bankAccNum,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode
    )
  }
  if (data) {
    console.log(data)
  }
  return (
    <>
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Bank Name" name="bankName" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Bank Acc Number"
              name="bankAccNum"
              required
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address Line 1" name="addressLine1" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address Line 2" name="addressLine2" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="City" variant="outlined" name="city" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Country" name="country" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Zip Code"
              name="zipCode"
              type="number"
              fullWidth
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
