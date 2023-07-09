import { React, useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen((prevState) => !prevState)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                На главную
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link">
                                О нас
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/feedback" className="nav-link">
                                Отзывы
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                Наши товары
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prices" className="nav-link">
                                Цены
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/record" className="nav-link">
                                Запись
                            </Link>
                        </li>
                        <li className="nav-item dropdown" onClick={toggleMenu}>
                            <a href="#" className="nav-link dropdown-toggle ">
                                Услуги
                            </a>
                            <ul
                                className={
                                    "dropdown-menu" + (isOpen ? " show" : "")
                                }
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <Link className="dropdown-item">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item">
                                        Another action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
