import React from "react"

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
            data-bs-theme="dark"
        >
            <div className="container-fluid text-white">
                <h1 className="lead fs-1">Студия косметологии</h1>

                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-nav me-auto mb-2 mb-lg-0"></span>
                    <h3 className="navbar-text lead fs-2">+7 892 012 94 21</h3>
                </div>
            </div>
        </nav>
    )
}

export default Header
