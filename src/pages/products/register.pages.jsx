import { Box, Grid, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { ValidatorForm , SelectValidator, TextValidator } from 'react-form-validator-core';
import { getCategory } from "../../services/category.service";

export default function RegisterPage() {
    const [form, setForm] = useState({
        "title": '',
        "price": 0,
        "description": '',
        "categoryId": 1,
        "images": ['']
    })
    const [ category , setCategory] = useState([]);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const getCategoryInit = async() => {
        const response = getCategory();
        setCategory(response);
    }
    useEffect(()=>{
        getCategoryInit();
    },[])
    return (
        <Box>
            <h1>Register products</h1>
            <ValidatorForm>
                <Grid container spacing={2}>
                    <Grid size={10}>
                        <TextValidator
                            fullWidth
                            label={'Name product'}
                            onChange={handleChange}
                            name="title"
                            value={form.title}
                            validators={['required', 'minStringLength:3']}
                            errorMessages={['this field is required', 'Min length 3']}
                        />
                    </Grid>
                    <Grid size={2}>
                        <TextValidator
                            fullWidth
                            label={'Price'}
                            onChange={handleChange}
                            name="price"
                            value={form.price}
                            validators={['required', 'isNumber', 'isPositive']}
                            errorMessages={['this field is required', 'it is not number', 'numbre is not positive']}
                        />
                    </Grid>
                    <Grid size={4}>
                        <TextValidator
                            onChange={handleChange}
                            label={'Description'}
                            name="description"
                            value={form.description}
                            validators={['required', 'minStringLength:3']}
                            errorMessages={['this field is required', 'Min length 3']}
                        />
                    </Grid>
                    <Grid size={4}>
                        <SelectValidator
                            onChange={handleChange}
                            label={'Description'}
                            name="description"
                            value={form.description}
                            validators={['required', 'minStringLength:3']}
                            errorMessages={['this field is required', 'Min length 3']}
                        >
                            <MenuItem disabled value="">
                                <em>Selected</em>
                            </MenuItem>
                            {category.map(res=>{
                                <MenuItem value={res.id}>{res.name}</MenuItem>
                            })}
                        </SelectValidator>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Box>
    )
}