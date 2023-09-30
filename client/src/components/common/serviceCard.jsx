import React from "react"
import PropTypes from "prop-types"

const ServiceCard = ({ services, idService }) => {
    return (
        <div className="row justify-content-center">
            {services.map((service) => {
                return (
                    service._id === idService && (
                        <div
                            key={service._id}
                            className="card m-5"
                            style={{ width: "60rem" }}
                        >
                            <img
                                src={service.image}
                                className="card-img-top mt-2"
                                // style={{ width: "300px" }}
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    )
                )
            })}
        </div>
    )
}

ServiceCard.propTypes = {
    services: PropTypes.array,
    idService: PropTypes.string
}

export default ServiceCard
