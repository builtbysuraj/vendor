import { useEffect, useState } from "react"

export function useGet() {
  const [vendorData, setVendorData] = useState()
  const [error, setError] = useState()

  const fetchVendors = async () => {
    try {
      const res = await fetch(`http://localhost:3000/vendors`)
      if (!res.ok) throw new Error(`Responce is not OK!`)
      const data = await res.json()
      setVendorData(data)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchVendors()
  }, [])

  return { vendorData, error }
}
