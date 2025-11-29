import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { CardComponent } from "../../components/card/card.components"
import { getProducts } from "../../services/products.service"
import { getCategory } from "../../services/category.service"

export const CategoryPages = () =>{
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    const getCategoryView = async () => {
        const response = await getCategory()
        setCategory(response)
        setLoading(false)
    }

    useEffect(()=>{
        getCategoryView()
    }, [])

    if (loading) {
        return (<h1>Loading...</h1>  );
    }

    return (
        <>
            <h1>Category Available</h1>
            <Grid container spacing={2}>
                {category.map((cat, i ) => {
                    return (
                        <Grid size={{ sx: 12, md: 4 }} key={`category-${i}`}>
                            <CardComponent title={cat.name} description={cat.slug}  img={cat.image} />
                        </Grid>
                    )
                })}
            </Grid>

            
        </>
    )
}