import { useContext, useEffect, useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import { ThemeContext } from "./components/ThemeProvider"
import axios from "axios"

function App() {
  const [gitUser, setGitUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getGitUser = async (user) =>{
    try {
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${user}`,{
        headers:{
          Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`
        }
      })

      setLoading(false)
      const data = await response.data
      console.log(data)
      setLoading(false)
      setGitUser(data)
    } catch (err) {
      console.log(err);
      setError('No results',err)
    }
  }

  const {theme} = useContext(ThemeContext)

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <>
      <div className="w-100 h-screen bg-[#F6F8FF] dark:bg-primaryBlack">
        <div className="lg:w-[50%] md:w-[65%] w-[90%] m-auto pt-5 flex flex-col gap-5 overflow-hidden">
          <Header/>
          <SearchBar getUser={getGitUser} error={error} />
          <Card gitUser={gitUser}/>
        </div>
      </div>
    </>
  )
}

export default App
