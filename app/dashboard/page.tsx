import { fetchRevenue } from "../lib/data"

export default async function Page() {
  const revenue = await fetchRevenue()
  console.log(revenue)
  return <p>Esta página es el contenido del Dashboard</p>
}