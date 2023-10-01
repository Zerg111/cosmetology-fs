import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../common/productCard"
import FormOrder from "../common/forms/formOrder/formOrder"

const PageProducts = () => {
    const dataOrdering = {
        name: "",
        phone: "",
        date: "",
        product: []
    }

    const [products, setProducts] = useState([])
    const [ordering, setOrdering] = useState(dataOrdering)
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccessfulOrder, setIsSuccessfulOrder] = useState(null)

    const handleSubmit = async (data) => {
        try {
            await axios
                .post("http://92.53.69.60/api/order", data)
                .then((res) => console.log(res.data))
        } catch (error) {
            const expectedErrors =
                error.response &&
                error.response.status >= 400 &&
                error.response.status < 500
            if (!expectedErrors) {
                console.log("Unexpected error")
            } else {
                setIsSuccessfulOrder(error.response.status)
                console.log("Expected Error")
            }
        }
    }

    useEffect(() => {
        if (products && isLoading) {
            setIsLoading(false)
        }
    }, [products])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get("http://92.53.69.60/api/product")
            setProducts(data)
            setOrdering(dataOrdering)
        }
        fetchData()
    }, [])

    return (
        <>
            {!isLoading ? (
                <>
                    <ProductCard products={products} />
                    <FormOrder
                        isSuccessfulOrder={isSuccessfulOrder}
                        products={products}
                        ordering={ordering}
                        onSubmit={handleSubmit}
                    />
                </>
            ) : (
                "Loading..."
            )}
        </>
    )
}

export default PageProducts
