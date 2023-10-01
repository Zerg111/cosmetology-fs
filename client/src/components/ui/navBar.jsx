import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const [services, setServices] = useState([])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get("http://92.53.69.60/api/service")
            setServices(data)
        }
        fetchData()
    }, [])

    const toggleMenu = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <ul className="nav nav-fill navbar navbar-expand-lg navbar-light bg-secondary bg-gradient lead">
            <li className="nav-item">
                <Link to="/" className="nav-link active text-light">
                    На главную
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/feedback" className="nav-link text-light">
                    Отзывы
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/products" className="nav-link text-light">
                    Наши товары
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/prices" className="nav-link text-light">
                    Цены
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/appointment" className="nav-link text-light">
                    Запись
                </Link>
            </li>
            <li className="nav-item dropdown" onClick={toggleMenu}>
                <a href="#" className="nav-link dropdown-toggle text-light">
                    Услуги
                </a>
                <ul
                    className={"dropdown-menu" + (isOpen ? " show" : "")}
                    aria-labelledby="navbarDropdownMenuLink"
                >
                    {services.map((service) => {
                        console.log(service.name)
                        return (
                            <li key={service._id}>
                                <Link
                                    to={`/services?id=${service._id}`}
                                    className="dropdown-item"
                                >
                                    {service.name}
                                </Link>
                            </li>
                        )
                    })}

                    {/* <li>
                        <Link className="dropdown-item">Action</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item">Another action</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item">
                            Something else here
                        </Link>
                    </li> */}
                </ul>
            </li>
        </ul>
    )
}

export default NavBar
