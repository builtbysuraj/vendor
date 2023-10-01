import { useState } from "react"

export function usePost() {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)

  const postData = async (vendorName, bankAccNum, bankName, addressLine1, addressLine2, city, country, zipCode) => {

    fetch("http://localhost:3000/vendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vendorName,
        bankAccNum,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode,
      }),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setErr(error))
  }

  return { data, err, postData }
}
