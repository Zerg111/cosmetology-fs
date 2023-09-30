import React from "react"
import PropTypes from "prop-types"

const MessageOrder = ({ date, isSuccessfulOrder, productsIsMissing }) => {
    const missing = productsIsMissing.map((product) => {
        return `${product.name} `
    })

    const getClass = () => {
        return (
            "alert" +
            (!isSuccessfulOrder
                ? " alert-success"
                : isSuccessfulOrder === 400
                ? " alert-warning"
                : " alert-danger")
        )
    }

    return (
        <div className={getClass()} role="alert">
            {!isSuccessfulOrder ? (
                <>
                    <h4 className="alert-heading">Отлично !</h4>
                    <p>Ваш заказ успешно оформлен.</p>
                    <hr />
                    <p className="mb-0">
                        Приходите за ним через неделю {date} числа по адресу г.
                        Саранск, пр.70 лет Октября
                    </p>
                </>
            ) : isSuccessfulOrder === 400 ? (
                <>
                    <h4 className="alert-heading"> Приносим свои извинения </h4>
                    <p>Ваш заказ не удалось оформить.</p>
                    <hr />
                    <p className="mb-0">{missing} отсутствует</p>
                </>
            ) : (
                <>
                    <h4 className="alert-heading"> Что-то пошло не так </h4>
                    <p>Ваш заказ не удалось оформить.</p>
                    <hr />
                    <p className="mb-0">Попробуйте еще раз</p>
                </>
            )}
        </div>
    )
}

MessageOrder.propTypes = {
    date: PropTypes.string,
    isSuccessfulOrder: PropTypes.number,
    productsIsMissing: PropTypes.array
}

export default MessageOrder
