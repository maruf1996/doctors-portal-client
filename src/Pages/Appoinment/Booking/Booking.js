import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,time,space}=booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
       <>
         <Grid item xs={12} sm={6} md={4}>
           <Paper elevation={3} sx={{py:4}}> 
           <Typography sx={{color:'#00ffbf'}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
           <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} SPACES AVAILABLE 
            </Typography>
            <Button onClick={handleBookingOpen} style={{background:'#00ffbf'}} variant="contained">Book Appoinment</Button>
           </Paper>
        </Grid>
        <BookingModal
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setBookingSuccess={setBookingSuccess}
            date={date}
        ></BookingModal>
       </>
    );
};

export default Booking;