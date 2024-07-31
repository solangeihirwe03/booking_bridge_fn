import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainRoute from "./components/layout/MainRoute"
import Home from "./pages/Home"

function App() {

  return (
    <><Router>
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
