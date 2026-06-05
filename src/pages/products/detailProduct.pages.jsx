import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products.service";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export const DetailProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper
        sx={{
          p: 4,
          borderRadius: 2,
          border: "1px solid #e0e0e0",
        }}
      >
        <Grid container spacing={5}>
          {/* GALERIA */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box display="flex" gap={2}>
              {/* Miniaturas */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: 90,
                }}
              >
                {product.images?.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={product.title}
                    onClick={() => setSelectedImage(index)}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      border:
                        selectedImage === index
                          ? "2px solid #3483fa"
                          : "1px solid #ddd",
                      borderRadius: 1,
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>

              {/* Imagen Principal */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 500,
                }}
              >
                <img
                  src={product.images?.[selectedImage]}
                  alt={product.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* INFORMACIÓN */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              Nuevo
            </Typography>

            <Typography
              variant="h4"
              fontWeight={400}
              gutterBottom
            >
              {product.title}
            </Typography>

            <Chip
              label={product.category?.name}
              color="primary"
              size="small"
            />

            <Typography
              variant="h3"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: 300,
              }}
            >
              ${product.price}
            </Typography>

            <Typography
              variant="body2"
              color="success.main"
              gutterBottom
            >
              Envío gratis
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              gutterBottom
            >
              Acerca de este producto
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
            >
              {product.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  bgcolor: "#3483fa",
                }}
              >
                Comprar ahora
              </Button>

              <Button
                variant="outlined"
                size="large"
                fullWidth
              >
                Agregar al carrito
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* DESCRIPCIÓN COMPLETA */}
        <Typography
          variant="h5"
          gutterBottom
        >
          Descripción
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          {product.description}
        </Typography>
      </Paper>
    </Container>
  );
};