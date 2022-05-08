import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner={
    background:`url(${bg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode:'darken,luminosity',
    marginTop:150
}

const AppoinmentBanner = () => {
    return (
       <Container>
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img 
                style={{width:400,marginTop:'-110px'}}
                src={doctor} alt="" />
            </Grid>
            <Grid item xs={12} md={6} sx={{
                display:'flex',
                justifyContent:'flex-start',
                textAlign:'left',
                alignItems:'center'
            }}>
                <Box>
                    <Typography variant='h6' sx={{my:3}} style={{color:"#5ce7ed"}}>
                        Appoinment
                    </Typography>
                    <Typography variant='h4' sx={{my:3}} style={{color:'white'}}>
                    Make an Appoinment Today
                    </Typography>
                    <Typography variant='h6' sx={{my:3}} style={{color:"white",fontSize:16,fontWeight:300}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa itaque sit laborum corporis accusantium a consequuntur dolores labore atque.
                    </Typography>
                    <Button variant='contained' style={{background:"#5ce7ed"}}>Lern More</Button>
                </Box>
            </Grid>
            </Grid>
        </Box>
       </Container>
    );
};

export default AppoinmentBanner;