import './Nav.scss'
import image from '../assets/icon-hamburger.svg'

function Nav() {
  return (
    <>
    <header>
      <div className="nav">
          <div className="left">
          <h2 className='logo'>Blogr</h2>
          <ul>
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
          </ul>
        </div>
        
          <img src={image} alt="" className='hamburger' />
        <div className="sign">
          <button className='login'>Login</button>
          <button className='register'>Sign Up</button>
        </div>
      </div>
      <div className="intro">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="control">
          <button className='start'>Start for Free</button>
          <button className='more'>Learn More</button>
        </div>
      </div>
    </header>  
    </>
  )
}

export default Nav;