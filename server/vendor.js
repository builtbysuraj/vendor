import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  vendorName: String,
  bankAccNum: String,
  bankName: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  country: String,
  zipCode: String,
}, { collection: "vendor" });

export const Vendor = mongoose.model('Vendor', vendorSchema);
