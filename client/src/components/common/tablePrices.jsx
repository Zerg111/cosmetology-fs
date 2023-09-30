import React from "react"
import PropTypes from "prop-types"

const TablePrices = ({ services }) => {
    console.log(services)
    return (
        <div className="row justify-content-center">
            <div className="card m-5" style={{ width: "60rem" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Услуга</th>
                            <th scope="col">Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => {
                            return (
                                <tr key={service._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{service.name}</td>
                                    <td>{service.price} ₽</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

TablePrices.propTypes = {
    services: PropTypes.array
}

export default TablePrices
