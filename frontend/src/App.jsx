import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"
import { Transfer } from "./pages/transfer"
import { RecoilRoot } from "recoil"



function App() {
  

  return (
    <div className="h-screen slate-600">
 
  <RecoilRoot>
    <BrowserRouter>
     <Routes>
      <Route path ="/signup" element ={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path ="/transfer" element={<Transfer/>} />
     </Routes>
    </BrowserRouter>
  </RecoilRoot>
    </div>
  )
}

export default App
