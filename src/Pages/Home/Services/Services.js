import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services=[
    {
        name:"Fluoride Treatment",
        discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias et autem enim commodi. Quis neque voluptate labore pariatur error nobis",
        img:fluoride
    },
    {
        name:"Cavity Filling",
        discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias et autem enim commodi. Quis neque voluptate labore pariatur error nobis",
        img:cavity
    },
    {
        name:"Teeth Whitening",
        discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias et autem enim commodi. Quis neque voluptate labore pariatur error nobis",
        img:whitening
    }
]

const Services = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{fontWeight:600, color:'#5ce7ed', m:2}} variant="h5" component="div">
            OUR SERVICES
        </Typography>
        <Typography sx={{fontWeight:600,m:4}} variant="h4" component="div">
            Services We Provide
        </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((service, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <Service
                    service={service}
                    key={service.name}
                    ></Service>
                </Grid>
            ))}
            </Grid>
        </Container>
      </Box>
    );
};

export default Services;