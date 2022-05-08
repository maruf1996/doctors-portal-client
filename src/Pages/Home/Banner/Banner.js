import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg={
    background:`url(${bg})`,

}

const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:450
}

const Banner = () => {
    return (
        <Container style={{bannerBg}} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:'left'}}>
           <Box>
           <Typography sx={{my:3}} variant="h3">
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography sx={{my:3}} variant="h6" style={{color:'gray',fontSize:15,fontWeight:300}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam omnis dicta expedita pariatur explicabo aliquam illo. Mollitia, possimus. Culpa.
            </Typography>
            <Button variant='contained' style={{background:"#5ce7ed"}}>Get Appoinment</Button>
           </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:'350px'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;