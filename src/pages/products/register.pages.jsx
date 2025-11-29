import { Box, Grid, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { getCategory } from "../../services/category.service";

export default function RegisterPage() {
    const [form, setForm] = useState({
        title: '',
        price: 0,
        description: '',
        categoryId: '',
        images: ['']
    });

    const [category, setCategory] = useState([]);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const getCategoryInit = async () => {
        const response = await getCategory();
        setCategory(response);
    };

    const onSubmit = () => {
        console.log(form);
    };

    useEffect(() => {
        getCategoryInit();
    }, []);

    return (
        <Box>
            <h1>Register products</h1>
            <ValidatorForm onSubmit={onSubmit}>
                <Grid container spacing={2}>

                    <Grid size={10}>
                        <TextValidator
                            label="Title"
                            fullWidth
                            onChange={handleChange}
                            value={form.title}
                            name="title"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid size={2}>
                        <TextValidator
                            fullWidth
                            label="Price"
                            onChange={(e) =>
                                setForm(prev => ({ ...prev, price: Number(e.target.value) }))
                            }
                            name="price"
                            value={form.price}
                            validators={['required', 'isNumber', 'isPositive']}
                            errorMessages={['this field is required', 'it is not number', 'number is not positive']}
                        />
                    </Grid>

                    <Grid size={4}>
                        <TextValidator
                            fullWidth
                            label="Description"
                            onChange={handleChange}
                            name="description"
                            value={form.description}
                            validators={['required', 'minStringLength:3']}
                            errorMessages={['this field is required', 'Min length 3']}
                        />
                    </Grid>

                    <Grid size={4}>
                        <SelectValidator
                            fullWidth
                            label="Category"
                            onChange={handleChange}
                            name="categoryId"
                            value={form.categoryId}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        >
                            <MenuItem disabled value="">
                                <em>Select</em>
                            </MenuItem>

                            {category.map(res => (
                                <MenuItem key={res.id} value={res.id}>
                                    {res.name}
                                </MenuItem>
                            ))}

                        </SelectValidator>
                    </Grid>


                </Grid>
            </ValidatorForm>
        </Box>
    );
}
