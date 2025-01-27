import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Student from "./pages/student"
import Teacher from "./pages/teacher"

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/teacher" element={<Teacher/>} />
      </Routes>
    </div>
  )
}

export default App