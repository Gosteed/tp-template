import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
        <li onClick={() => navigate("/respuesta")}>Respuesta AI</li>
      </ul>
    </nav>
  )
}

export default Navbar