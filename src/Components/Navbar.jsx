import {useContext} from 'react'
import {ThemeContext} from './ThemeContextWrapper'

const Navbar = () => {
  const {theme, handleTheme} = useContext(ThemeContext)

  return (
    <nav>
      <p>This site includes important parts aboput me like:</p>
        <ul>
            <li>Management</li>
            <li>Resume</li>
            <li>College</li>
        </ul>
        <button className={`button${theme} btn`} onClick={() => handleTheme()}>change display</button>
    </nav>
  )
}

export default Navbar