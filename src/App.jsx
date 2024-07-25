import { Navbar, CardGrid } from "./components"

export const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <CardGrid />
      </div>
    </div>
  )
}