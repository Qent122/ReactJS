import './header.css';
import logo from './logo.svg'

function header(){
    return(
        <div className='header'>
            <div className='presentation'>
            <img src={logo} className='logo' />
            <h1>Bienvenue sur mon cour sur React !</h1>
            <img src={logo} className='logo' />
            </div>
            
            <nav className='nav'>
                <ul>
                <li><a>link 1</a></li>
                <li><a>link 2</a></li>
                <li><a>link 3</a></li>
                <li><a>link 4</a></li>

                </ul>
                
            </nav>
        </div>
    )
}

export default header;