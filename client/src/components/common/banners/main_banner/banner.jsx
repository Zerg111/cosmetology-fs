import React from "react"
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.png"
import { Carousel } from "react-bootstrap"

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    style={{ height: "450px" }}
                />
                <Carousel.Caption />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
