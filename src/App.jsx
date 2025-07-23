import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogPage from './Pages/BlogPage'
import Login from './Pages/LoginPage'
import Header from './components/Header'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import LoginHeader from './components/LoginPageHeader'
import NotFound from './components/NotFound'
import BlogDetails from './Pages/BlogDetails'
import AddBlogForm from './Pages/AddBlog'
import BlogList from './Pages/BlogList'

function App() {
const pathname = window.location.pathname;
console.log(pathname);
const navigate=useNavigate()

const isLoggin=getLogin();

function getLogin(){
  let user=localStorage.getItem("user")
if(user){
  return true

}
return false
}

function setLogin(data){
  
  localStorage.setItem("user",JSON.stringify({"user":"ABC"}))
  navigate("/")

}


function Logout(){
  localStorage.clear()
  navigate("/login")
}
  return (


<>
   

    { getLogin() ?<Header getLogin={getLogin} logout={Logout}/> : <LoginHeader /> }

      <main className="w-full mx-auto px-6 py-8 bg-neutral-100  " >
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/login" element={!isLoggin && <Login setLogin={setLogin}/>}/>
          {/* <Route path="/" element={<BlogPage />} /> */}
<Route path="/add-blog" element={<AddBlogForm />} />
          
           <Route path="*" element={<NotFound />} />

           
          {/* Add more routes as needed */}
        </Routes>
      </main>
    



</>



//    <div>
//     

// <Login/>
//     {/* <BlogPage>/> */}
//    </div>

  )
}

export default App
