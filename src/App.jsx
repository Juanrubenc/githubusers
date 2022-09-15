import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserCard from './components/UserCard'
import './assets/react.svg'
import "./components/Styles/card.css"
import { useEffect } from 'react'
import axios from 'axios'
import './/components/Styles/darkmode.css'


function App() {

  const [user, setUser] = useState()
  const [username, setUsername] = useState("")
  const [darkMode, setDarkMode] = useState(false)


  const searchHandler = (e) => {
    e.preventDefault()
    setUsername(e.target.search.value)
  }



  useEffect(() => {
    let URL 
    if(username){
      URL = `https://api.github.com/users/${username}`}
      else
      {URL = `https://api.github.com/users/octocat`}
    axios.get(URL)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        alert("User not found")
      })
  }, [username])


  const darkModeHandler = () => {
    setDarkMode(!darkMode)
  }


  return (
    <div className={darkMode ? 'App-darkmode' : 'App'}>
      <div className='App-container'>
      <div className="header">
        <h1 className={`tittle ${darkMode ? 'tittle-dark' : ''}`}>
          devfinder
        </h1>
        <div>
        <i className={darkMode ? "fa-regular fa-sun color-dark" : "fa-regular fa-moon" }></i>
        <span className={`darklight ${darkMode ? 'color-dark': ''}`} onClick={darkModeHandler}>{darkMode ? "Light" : "Dark"}</span> 
        </div>
      </div>
      <form onSubmit={searchHandler} className={`search-form ${darkMode ? 'bg-dark': ''}`}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input onSubmit={searchHandler} className='search-form__input' type="text" id="search" placeholder="Search GitHub username..."></input>
        <button className='search-form__btn'>Search</button>
      </form>
      <UserCard
        user={user}
        darkMode={darkMode}
      />
    </div>
      </div>
  )
}

export default App
