import {useContext} from 'react'
import {ThemeContext} from './ThemeContextWrapper'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`footer footer${theme}`}>
        <p>&copy; 2024 Ren Levingar. All rights reserved. | <strong>Privacy Policy</strong> | <strong>Terms of Service</strong></p>
    </div>
  )
}

export default Footer