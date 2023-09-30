import React from "react"
import PropTypes from "prop-types"

const MessageAppointment = ({ date, time, isSuccessfulAppointment }) => {
    const getClass = () => {
        return (
            "alert" +
            (!isSuccessfulAppointment
                ? " alert-success"
                : isSuccessfulAppointment === 400
                ? " alert-warning"
                : " alert-danger")
        )
    }

    return (
        <div className={getClass()} role="alert">
            {!isSuccessfulAppointment ? (
                <>
                    <h4 className="alert-heading">Отлично !</h4>
                    <p>Ваша запись успешно оформлена.</p>
                    <hr />
                    <p className="mb-0">
                        Вы записаны на {date} в {time}
                    </p>
                </>
            ) : isSuccessfulAppointment === 400 ? (
                <>
                    <h4 className="alert-heading"> Приносим свои извинения </h4>
                    <p>Время, которое вы выбрали уже занято</p>
                    <hr />
                    <p className="mb-0"> Попробуйте выбрать другое</p>
                </>
            ) : (
                <>
                    <h4 className="alert-heading"> Что-то пошло не так </h4>
                    <p>Вашу запись не удалось оформить.</p>
                    <hr />
                    <p className="mb-0">Попробуйте еще раз</p>
                </>
            )}
        </div>
    )
}

MessageAppointment.propTypes = {
    date: PropTypes.string,
    time: PropTypes.string,
    isSuccessfulAppointment: PropTypes.number
}

export default MessageAppointment
