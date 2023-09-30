import React, { useEffect, useState } from "react"
import axios from "axios"
import FeedbackCard from "../common/feedbackCard"

const PageFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                "http://localhost:8080/api/feedback"
            )
            setFeedbacks(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (feedbacks && isLoading) {
            setIsLoading(false)
        }
    }, [feedbacks])
    return (
        <>
            {!isLoading ? <FeedbackCard feedbacks={feedbacks} /> : "Loading..."}{" "}
        </>
    )
}

export default PageFeedback
