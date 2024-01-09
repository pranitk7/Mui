import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import herobg from '../assets/hero.png';
import CardContainer from "./CardContainer";
function Hero() {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px dashed grey",
        minHeight: "100vh",
        backgroundColor: "#1a73e8",
        width: "100%",
      }}
    >
      <Container >
        <Grid sx={{ my:'50px'  }} container spacing={2}>
          <Grid  sx={{ minHeight:'80vh' }} item xs={5}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "3rem", lineHeight:'3.5rem', my:'20px', color: "white" }}
            >
              Make your app the   best it can be
            </Typography>


            <Typography
              sx={{ fontWeight: "normal",  mb:5 , fontSize: "1.3rem", color: "white" }}
            >
       Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.
            </Typography>

            <Stack
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}
>
<Button color="primary" sx={{ 
     '&:hover': { // Apply styles on hover
      backgroundColor: 'white', // Change background color on hover
      color: '#1a73e8', // Change text color on hover
    }, fontSize: 18 , color:'#1a73e8'  ,  backgroundColor:'white' , px:7 , py:2 , borderRadius:'8px' }} variant="text" >Get Started</Button>

<Link underline="none" sx={{ fontSize:18 , color:'white' , cursor:'pointer' }}> Try Demo </Link>
<span className="divider"> | </span>
<Link underline="none" sx={{ fontSize:18 , color:'white' , cursor:'pointer' }}> Watch Demo </Link>

</Stack>
          </Grid>
          <Grid  sx={{ minHeight:'80vh' }} item xs={7}>
          <div className="flexcenter">
          <img className="herobg" src={herobg} alt="" />
          </div>
          </Grid>
        </Grid> 
        
        <CardContainer/>

      </Container>
    </Box>
  );
}

export default Hero;
