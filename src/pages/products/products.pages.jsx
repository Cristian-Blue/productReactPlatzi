import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { CardComponent } from "../../components/card/card.components"
import { getProducts } from "../../services/products.service"

export const ProductsPages = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProductsView = async () => {
        const response = await getProducts()
        setProducts(response)
        setLoading(false)
    }

    useEffect(()=>{
        getProductsView()
    }, [])

    if (loading) {
        return (<h1>Loading...</h1>  );
    }

    return (
        <>
            <h1>Products Available</h1>
            <Grid container spacing={2}>
                {products.map((product, i ) => {
                    return (
                        <Grid size={{ sx: 12, md: 4 }} key={`prodcut-${i}`}>
                            <CardComponent title={product.title} description={product.description} price={product.price} img={product.images[0]} />
                        </Grid>
                    )
                })}
            </Grid>

            
        </>
    )
}