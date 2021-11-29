import React from 'react';
import { FormControl, TextField, FormHelperText, Box, Button } from '@mui/material';

const Contact = () => {

    const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <h1 className="my-5 fw-bold text-center text-white">Get in Touch</h1>
            <div className="row m-0">
                <div className="col-lg-2 text-white">
                    <h3 className="fw-bold">Let's talk about everything!</h3>
                    <p>Don't like forms? Send me an email.</p>
                </div>

                <div className="col-lg-9 text-white">
                    <FormControl onSubmit={onSubmit}>
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                            }}
                            className="text-white"
                        >

                            <TextField sx={{ m: 1 }} fullWidth id="name" label="Name" variant="outlined" />
                            <TextField sx={{ m: 1 }} fullWidth id="email" label="Email" variant="outlined" />
                            <TextField sx={{ m: 1 }} fullWidth id="subject" label="Subject" variant="outlined" />
                            <TextField sx={{ m: 1 }} fullWidth multiline maxRows={4} aria-label="minimum height"
                                minRows={3} id="messages" label="Messages" variant="outlined" />

                            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            <Button sx={{ m: 1 }} type="submit" variant="contained">Submit</Button>
                        </Box>

                    </FormControl>
                </div>

            </div>
        </div>
    );
};

export default Contact;