import React from "react"
import PropTypes from "prop-types"

const ProductCard = ({ products }) => {
    return (
        <div className="row justify-content-center">
            {products.map((product) => {
                return (
                    <div
                        key={product._id}
                        className="card m-5"
                        style={{ width: "20rem" }}
                    >
                        <img
                            src={product.image}
                            className="card-img-top"
                            style={{ width: "300px" }}
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div>
                            <p className="lead">{product.price} ₽</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

ProductCard.propTypes = {
    products: PropTypes.array
}

export default ProductCard
