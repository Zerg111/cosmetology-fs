import React from "react"
import image1 from "./kotik1.png"
import image2 from "./kotik2.png"
import image3 from "./kotik3.png"
import { Carousel } from "react-bootstrap"

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Первый слайд</h3>
                    <p>тут первый слайд</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Второй слайд</h3>
                    <p>тут второй слайд</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Третий слайд</h3>
                    <p>тут третий слайд</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
