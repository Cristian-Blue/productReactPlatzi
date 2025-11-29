import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Avatar,
    CardHeader,
} from "@mui/material";

export const CardComponent = ({ title, description = '', price = '', img }) => {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >

            <CardActionArea sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <CardMedia sx={{ height: 240, width: "100%" }} image={img} title={title} />

                <CardContent
                    sx={{
                        textAlign: "justify",
                        width: "90%",
                    }}
                >
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            textAlign: "justify",
                        }}
                    >
                        {description}
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            textAlign: "right",
                            fontWeight: "bold",
                            mt: 2,
                        }}
                    >
                        {price ? `$${price}` : null}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const CardUser = ({ data }) => {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardHeader
                avatar={
                    <Avatar src={data.avatar} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={data.name}
                subheader={data.email}
            />
        </Card>
    )
}