import { Box, Card, CardContent, Grid, MenuItem, Typography, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { ValidatorForm, TextValidator, SelectValidator } from "react-material-ui-form-validator";
import { getCategory } from "../../services/category.service";
import { postProducts } from "../../services/products.service";
import { toast } from "react-toastify";
import FullScreenLoader from "../../components/loader/loader.component";

export default function RegisterPage() {
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: "",
        categoryId: "",
        images: [""],
    });

    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState([]);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, images: [value] }));
    };

    const getCategoryInit = async () => {
        const response = await getCategory();
        setCategory(response);
    };

    const restoreForm = () => {
        setForm({
            title: "",
            price: 0,
            description: "",
            categoryId: "",
            images: [""],
        });
    };

    const onSubmit = async () => {
        setLoader(true);
        const response = await postProducts(form);

        if (response.succes) {
            toast("Product save", { type: "success" });
            restoreForm();
        } else {
            toast("Product not save", { type: "error" });
        }

        setLoader(false);
    };

    useEffect(() => {
        getCategoryInit();
    }, []);

    return (
        <Box sx={{ maxWidth: 800, margin: "40px auto" }}>
            {loader && <FullScreenLoader />}

            <Card sx={{ p: 2, borderRadius: 5 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                        Register Product
                    </Typography>

                    <ValidatorForm onSubmit={onSubmit}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <TextValidator
                                    label="Title"
                                    fullWidth
                                    onChange={handleChange}
                                    value={form.title}
                                    name="title"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextValidator
                                    label="Price"
                                    fullWidth
                                    onChange={(e) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            price: Number(e.target.value),
                                        }))
                                    }
                                    name="price"
                                    value={form.price}
                                    validators={["required", "isNumber", "isPositive"]}
                                    errorMessages={[
                                        "This field is required",
                                        "Not a number",
                                        "Must be a positive number",
                                    ]}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextValidator
                                    fullWidth
                                    label="Description"
                                    onChange={handleChange}
                                    name="description"
                                    value={form.description}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <SelectValidator
                                    fullWidth
                                    label="Category"
                                    onChange={handleChange}
                                    name="categoryId"
                                    value={form.categoryId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                >
                                    <MenuItem disabled value="">
                                        <em>Select</em>
                                    </MenuItem>

                                    {category.map((res) => (
                                        <MenuItem key={res.id} value={res.id}>
                                            {res.name}
                                        </MenuItem>
                                    ))}
                                </SelectValidator>
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <TextValidator
                                    label="Image URL"
                                    fullWidth
                                    onChange={handleImageChange}
                                    value={form.images[0]}
                                    name="images"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            px: 4,
                                            py: 1,
                                            borderRadius: 2,
                                            fontWeight: 600,
                                            textTransform: "none",
                                        }}
                                    >
                                        Save Product
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </CardContent>
            </Card>
        </Box>
    );
}
