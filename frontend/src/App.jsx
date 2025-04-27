import './styles/main.scss'
import { Home } from './pages/Home'
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useEffect } from "react"
import { useAuthStore } from './store/useAuthStore'
import Loader from './cmps/Loader'
import { MainIndex } from './pages/MainIndex'




function App() {

  const { authUser, checkAuth, isLoading } = useAuthStore()


  useEffect(() => {
    checkAuth()


  }, [checkAuth])


  if (isLoading && !authUser) return <Loader />

  return (
    <>
      <Routes>
        <Route path="/" element={!authUser ? <Home /> : <Navigate to="/home" />} />
        <Route path="/home" element={authUser ? <MainIndex /> : <Navigate to="/" />} />
      </Routes>

      <Toaster />
    </>
  )
}

export default App
