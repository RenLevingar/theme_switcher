import Navbar from './Navbar'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContextWrapper'

const Header = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <header className={`header${theme}`}>
        <div>
            <h1>Team Work</h1>
        </div>  
        <Navbar/>
    </header>
  )
}

export default Header