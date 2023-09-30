import React from "react"
import PropTypes from "prop-types"

const FeedbackCard = ({ feedbacks }) => {
    return (
        <div className="row justify-content-center">
            {feedbacks.map((feedback) => {
                return (
                    <div
                        key={feedback._id}
                        className="card m-5"
                        style={{ width: "30rem" }}
                    >
                        <img
                            src={feedback.image}
                            className="card-img-top mt-2"
                            style={{ width: "450px" }}
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text">{feedback.feedback}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

FeedbackCard.propTypes = {
    feedbacks: PropTypes.array
}

export default FeedbackCard
