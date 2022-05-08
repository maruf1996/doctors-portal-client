import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({booking,openBooking,handleBookingClose,date,setBookingSuccess}) => {
    const {name,time}=booking;
    const {user}=useAuth();

    const initalInfo={patientName:user.displayName, email:user.email, phone:''}
    const [bookingInfo,setBookingInfo]=useState(initalInfo);

    const handleOnBlur=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newInfo={...bookingInfo};
      newInfo[field]=value;
      setBookingInfo(newInfo);
      // console.log(newInfo);
    }

    const handleBookingSubmit=e=>{
      const appointment={
        ...bookingInfo,
        time,
        serviceName:name,
        date:date.toLocaleDateString()
      }
      console.log(appointment);
        // alert("Submitted");

        fetch('http://localhost:5000/appointments',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(appointment)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            setBookingSuccess(true);
            handleBookingClose();
          }
        })
        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
                <TextField fullWidth defaultValue={time} disabled size="small" sx={{my:1}}/>
                <TextField onBlur={handleOnBlur} fullWidth name="patientName" defaultValue={user.displayName}  size="small" sx={{my:1}}/>
                <TextField onBlur={handleOnBlur} fullWidth name="email" defaultValue={user.email}  size="small" sx={{my:1}}/>
                <TextField onBlur={handleOnBlur} fullWidth name="phone" defaultValue="Phone Number"  size="small" sx={{my:1}}/>
                <TextField fullWidth defaultValue={date.toDateString()} disabled size="small" sx={{my:1}}/>
                <Button type='submit' variant="contained" style={{background:'#00ffbf',float:"right"}}>Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;

