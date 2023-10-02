import { useEffect, useState } from "react"

export function useGet() {
  const [vendorData, setVendorData] = useState()
  const [error, setError] = useState()
  const fetchVendors = async () => {
    try {
      const res = await fetch(`https://vendor-react.onrender.com/vendors`)
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

  return { vendorData, error, fetchVendors }
}

export function useGetById() {
  const [data, setData] = useState()
  const fetchById = (id) => {
    useEffect(() => {
      fetch(`https://vendor-react.onrender.com/vendors/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])
  }
  return { data, fetchById }
}
