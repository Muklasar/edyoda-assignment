import './navbar.css'
import { logo } from '../../assets/icons/logo'
import { search } from '../../assets/icons/search'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <nav className='navbar-container'>
                <ul className='left-nav'>
                    <li>
                        {logo}
                    </li>
                    <li>
                        <a href="#">Cources
                            <i className='dropdown-icon'>
                                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.91 0.580078L6.5 5.17008L11.09 0.580078L12.5 2.00008L6.5 8.00008L0.5 2.00008L1.91 0.580078Z" fill="black" />
                                </svg>
                            </i></a>
                        <ul class="submenu">
                            <li><a href="#">Category 1</a></li>
                            <li><a href="#">Category 2</a></li>
                            <li><a href="#">Category 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Programs
                            <i className='dropdown-icon'>
                                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.91 0.580078L6.5 5.17008L11.09 0.580078L12.5 2.00008L6.5 8.00008L0.5 2.00008L1.91 0.580078Z" fill="black" />
                                </svg>
                            </i></a>
                        <ul class="submenu">
                            <li><a href="#">Category 1</a></li>
                            <li><a href="#">Category 2</a></li>
                            <li><a href="#">Category 3</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className='right-nav'>
                    <li>
                        <a href='#'>{search}</a>
                        {/* <div class="searchBox">
                            <input class="searchInput" type="text" name="" placeholder="Search" />
                            <button class="searchButton" href="#">
                                {search}
                            </button>
                        </div> */}

                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <button className='nav-button'>join now</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar