import { Button, Grid } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      style={{ marginBottom: "20px" }}
    >
      <Grid item>
        <Button
          variant="contained"
          onClick={addOne}
          sx={{ minWidth: "30px", padding: "5px" }}
        >
          <span
            style={{ fontSize: "20px", fontWeight: "bold", lineHeight: "1" }}
          >
            +
          </span>
        </Button>
      </Grid>
      <Grid item>
        <h2 style={{ margin: "0" }}> {counter} </h2>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
          sx={{ minWidth: "30px", padding: "5px" }}
        >
          <span
            style={{ fontSize: "20px", fontWeight: "bold", lineHeight: "1" }}
          >
            -
          </span>
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={() => onAdd(counter)}
          sx={{ fontWeight: "bold" }}
        >
          agregar al carrito
        </Button>
      </Grid>
    </Grid>
  );
};

export default ItemCount;
