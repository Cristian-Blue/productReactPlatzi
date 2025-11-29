import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { CardComponent, CardUser } from "../../components/card/card.components"
import { getProducts } from "../../services/products.service"
import { getCategory } from "../../services/category.service"
import { getUsers } from "../../services/users.service"

export const UsersPages = () =>{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsersView = async () => {
        const response = await getUsers()
        setUsers(response)
        setLoading(false)
    }

    useEffect(()=>{
        getUsersView()
    }, [])

    if (loading) {
        return (<h1>Loading...</h1>  );
    }

    return (
        <>
            <h1>Users Available</h1>
            <Grid container spacing={2}>
                {users.map((user, i ) => {
                    return (
                        <Grid size={{ sx: 12, md: 4 }} key={`category-${i}`}>
                            <CardUser data={user}  />
                        </Grid>
                    )
                })}
            </Grid>

            
        </>
    )
}