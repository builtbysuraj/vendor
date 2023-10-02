export function useDelete() {

  const handleDelete = async (id) => {
    console.log("Handle delete")
    await fetch(`http://localhost:3000/vendors/${id}`, {
      method: "DELETE",
    })
  }
  return { handleDelete }
}
