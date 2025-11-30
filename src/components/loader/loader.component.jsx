import { Box, CircularProgress, Typography } from "@mui/material";

export default function FullScreenLoader() {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(6px)",
                background: "rgba(255, 255, 255, 0.4)",
                zIndex: 9999,
            }}
        >
            <CircularProgress size={70} thickness={4} />

            <Typography
                variant="h6"
                sx={{ mt: 3, fontWeight: 600, letterSpacing: 1 }}
            >
                Loading...
            </Typography>
        </Box>
    );
}
