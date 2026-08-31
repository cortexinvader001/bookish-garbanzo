import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <svg className="logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,6 87,27 87,73 50,94 13,73 13,27" stroke="#ffffff" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="7" fill="#ffffff" />
        <line x1="50" y1="50" x2="50" y2="16" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="79" y2="33" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="79" y2="67" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="50" y2="84" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="21" y2="67" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="21" y2="33" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="50" cy="16" r="4" fill="#ffffff" />
        <circle cx="79" cy="33" r="4" fill="#ffffff" />
        <circle cx="79" cy="67" r="4" fill="#ffffff" />
        <circle cx="50" cy="84" r="4" fill="#ffffff" />
        <circle cx="21" cy="67" r="4" fill="#ffffff" />
        <circle cx="21" cy="33" r="4" fill="#ffffff" />
      </svg>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/#aboutme" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* spacer to balance flex layout like the logo on the left */}
      <div style={{ width: 76, flexShrink: 0 }} />
    </header>
  )
}
