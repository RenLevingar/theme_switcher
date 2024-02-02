import {useContext} from 'react'
import {ThemeContext} from './ThemeContextWrapper'

const Navbar = () => {
  const {theme, handleTheme} = useContext(ThemeContext)

  return (
    <nav>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
        <button className={`button${theme}`} onClick={() => handleTheme()}>change display</button>
    </nav>
  )
}

export default Navbar