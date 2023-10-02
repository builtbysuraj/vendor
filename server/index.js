import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { URL } from "./config.js";
import { Vendor } from "./vendor.js";
const app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect(URL, { useNewUrlParser: true })
//   .then(() => console.log('Database successfully connected'))
//   .catch(error => console.error('Database could not be connected:', error));

mongoose.Promise = global.Promise;
mongoose.connect(URL, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected')
},
  error => {
    console.log('Database could not be connected: ' + error)
  }
)

app.get("/vendors", async (req, res) => {
  try {
    const vendors = await Vendor.find()
    res.json(vendors)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!", error: error.message })
  }
})

app.post("/vendors", async (req, res) => {

  const { vendorName, bankAccNum, bankName, addressLine1, addressLine2, city, country, zipCode } = req.body;

  const vendor = new Vendor({
    vendorName,
    bankAccNum,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  })
  try {
    const savedVendor = await vendor.save()
    res.status(201).json({ message: "Success", data: savedVendor })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error!", error: error.message })
  }
})

app.get("/vendors/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id)
    if (!vendor) {
      return res.status(404).json({ message: "No vendor found with this id" })
    }
    res.json(vendor)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!", error: error.message })
  }
})

app.delete("/vendors/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id)
    if (!vendor) {
      return res.status(404).json({ message: "No vendor found with this id" })
    }
    res.json({ message: "Vendor deleted successfully!" })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!", error: error.message })
  }
})

app.patch("/vendors/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vendor) {
      return res.status(404).json({ message: 'No vendor found with this id' });
    }
    res.json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!", error: error.message });
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
