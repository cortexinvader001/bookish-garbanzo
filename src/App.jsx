import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import RippleBackground from './components/RippleBackground.jsx'

export default function App() {
  return (
    <>
      <div className="bg" />
      <RippleBackground />
      <div className="rays" />

      <div className="page">
        <Header />
        <Outlet />
      </div>
    </>
  )
}
