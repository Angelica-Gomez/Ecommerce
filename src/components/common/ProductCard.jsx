import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
export const ProductCard = ({ img, title, description, price, id }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 450,
        backgroundColor: "white",
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%", objectFit: "cover" }}
        image={img}
      />
      <CardContent
        sx={{
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/item/${id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ color: "darkblue", fontWeight: "bold" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
