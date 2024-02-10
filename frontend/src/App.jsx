import {Route, Router, Routes, BrowserRouter} from "react-router-dom"
  import {SignUp} from "./pages/Singup"
  import {Signin} from "./pages/Signin"
  import {SignUp} from "./pages/Sendmoney"
  import {SignUp} from "./pages/Dashboard"
function App() {

  return (
    <div>
       <BrowserRouter>
       <Routes>
       <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        {/* <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/> */}
         
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
