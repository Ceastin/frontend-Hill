import Landing from "./Pages/Landing"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import ProjectPage from "./Pages/ProjectPage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/projectpg" element={<ProjectPage></ProjectPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
