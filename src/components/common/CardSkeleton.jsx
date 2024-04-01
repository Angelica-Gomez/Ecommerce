import { Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: 250,
        textAlign: "center",
        marginLeft: "450px",
        marginRight: "-300px",
        marginTop: "200px",
        marginBottom: "150px",
      }}
    >
      <Stack
        spacing={0.5}
        sx={{ border: "1px solid #C7C8CC", borderRadius: "8px" }}
      >
        <Skeleton
          variant="rectangular"
          width={250}
          height={120}
          animation="wave"
        />

        <Skeleton variant="text" width={250} height={70} animation="wave" />
        <Skeleton variant="text" width={250} height={60} animation="wave" />
        <Skeleton
          variant="text"
          width={150}
          height={50}
          animation="wave"
          sx={{
            alignSelf: "center",
          }}
        />
        <Skeleton
          variant="text"
          width={180}
          height={70}
          animation="wave"
          sx={{
            alignSelf: "center",
          }}
        />
      </Stack>
    </div>
  );
};
