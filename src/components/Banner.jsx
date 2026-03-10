import logo from '../assets/logo.png'
import '../styles/Banner.css'

const Banner = () => {
  //return <h1>🌿 La maison jungle</h1>
   const title = 'La maison jungle'
  return (
    <div className='banner'>
      <img 
        src={logo} 
        alt="Logo La maison jungle" 
        className='banner-logo'
      />
      <h1 className='banner-title'>{title}</h1>
    </div>
  )
}

export default Banner







