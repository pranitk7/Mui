import { Equalizer, Extension } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Build from "../assets/build.png";
import engage from "../assets/engage.png";
import home_firebase from "../assets/home_firebase.png";
function CardContainer() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        py: 10,
        alignItems: "center",
        borderRadius: "20px",
        minHeight: "80vh",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          width:'70%',
          textAlign:'center',
          fontSize: "42px",
          lineHeight: "3.5rem",
          my: "40px",
          color: "rgb(66, 66, 66)",
        }}
      >
        Products and solutions for every stage of your app development journey
      </Typography>



      <Grid sx={{ px: 5 }} container spacing={5}>
        <Grid item xs={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              py: 10,
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <img className="card_img" src={Build}></img>
            <CardHeader
              subheader="Accelerate and scale
app development without
managing infrastructure "
              subheaderTypographyProps={{
                sx: {
                  fontSize: "16px",
                  textAlign: "center",
                  my: 2,
                  color: "rgb(66, 66, 66)",
                  fontWeight: "normal",
                },
              }}
              titleTypographyProps={{
                sx: {
                  fontSize: "26px",
                  textAlign: "center",
                  mt: 2,
                  color: "rgb(66, 66, 66)",
                  fontWeight: "bold",
                },
              }}
              title="Build"
            ></CardHeader>
            <CardContent>
              <Link
                sx={{
                  color: "#1a73e8",
                  fontWeight: "semibold",
                  fontSize: "20px",
                }}
                underline="none"
              >
                View all build products
              </Link>
              <Stack sx={{ my: 4 }} spacing={2}>
                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <PeopleAltIcon sx={{ mr: 2 , width:'20px' }} /> Authentication
                </Link>

                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <Extension sx={{ mr: 2 , width:'20px' }} /> Extension
                </Link>

                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <Equalizer sx={{ mr: 2 , width:'20px' }} /> Analyze
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              py: 10,
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <img className="card_img" src={engage}></img>
            <CardHeader
              subheader="Boost engagement with
              rich analytics, A/B testing,
              and messaging campaigns  "
              subheaderTypographyProps={{
                sx: {
                  fontSize: "16px",
                  textAlign: "center",
                  my: 2,
                  color: "rgb(66, 66, 66)",
                  fontWeight: "normal",
                },
              }}
              titleTypographyProps={{
                sx: {
                  fontSize: "26px",
                  textAlign: "center",
                  mt: 2,
                  color: "rgb(66, 66, 66)",
                  fontWeight: "bold",
                },
              }}
              title="Engage"
            ></CardHeader>
            <CardContent>
              <Link
                sx={{
                  color: "#1a73e8",
                  fontWeight: "semibold",
                  fontSize: "20px",
                }}
                underline="none"
              >
                View all build products
              </Link>
              <Stack sx={{ my: 4 }} spacing={2}>
                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <PeopleAltIcon sx={{ mr: 2 , width:'20px' }} /> Authentication
                </Link>

                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <Extension sx={{ mr: 2 , width:'20px' }} /> Extension
                </Link>

                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <Equalizer sx={{ mr: 2 , width:'20px' }} /> Analyze
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              py: 10,
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <img className="card_img" src={home_firebase}></img>
            <CardHeader
              subheader="Release with confidence
              and monitor performance
              and stability  "
              subheaderTypographyProps={{
                sx: {
                  fontSize: "16px",
                  textAlign: "center",
                  my: 2,
                  color: "rgb(66, 66, 66)",
                  fontWeight: "normal",
                },
              }}
              titleTypographyProps={{
                sx: {
                  fontSize: "26px",
                  textAlign: "center",
                  mt: 2,
                  color: "rgb(66, 66, 66)",
                  fontWeight: "bold",
                },
              }}
              title="Release & Monitor"
            ></CardHeader>
            <CardContent>
              <Link
                sx={{
                  color: "#1a73e8",
                  fontWeight: "semibold",
                  fontSize: "20px",
                }}
                underline="none"
              >
                View all build products
              </Link>
              <Stack sx={{ my: 4 }} spacing={2}>
                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <PeopleAltIcon sx={{ mr: 2 , width:'20px' }} /> Authentication
                </Link>

                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <Extension sx={{ mr: 2 , width:'20px' }} /> Extension
                </Link>

                <Link
                  sx={{
                    color: "rgb(117, 117, 117)",
                    fontWeight: "semibold",
                    fontSize: "16px",
                    my: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    textAlign: "center",
                    "&:hover": {
                      // Apply styles on hover
                      color: "#1a73e8", // Change text color on hover
                    },
                  }}
                  underline="none"
                >
                  <Equalizer sx={{ mr: 2 , width:'20px' }} /> Analyze
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}

export default CardContainer;
