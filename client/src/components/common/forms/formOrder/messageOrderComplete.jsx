import React from "react"
import PropTypes from "prop-types"

const MessageOrderComplete = ({ date }) => {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Отлично !</h4>
            <p>Ваш заказ успешно оформлен.</p>
            <hr />
            <p className="mb-0">
                Приходите за ним через неделю {date} числа по адресу г. Саранск,
                пр.70 лет Октября
            </p>
        </div>
    )
}

MessageOrderComplete.propTypes = {
    date: PropTypes.string
}

export default MessageOrderComplete
