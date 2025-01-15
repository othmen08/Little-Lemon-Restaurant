import logo from './assets/Asset 16@4x.png'
import Navbar from './Navbar';
function Header() {
    return(
        <header>
        <div>
          <img width={200} src={logo} alt='logo' />
        </div>
       <Navbar/>
      </header>
    )
}

export default Header;