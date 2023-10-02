export function useDelete() {

  const handleDelete = async (id) => {
    await fetch(`https://vendor-react.onrender.com/vendors/${id}`, {
      method: "DELETE",
    })
  }
  return { handleDelete }
}
