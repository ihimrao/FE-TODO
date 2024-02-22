import { Box, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const ImageContainer = styled(Box)`
  width: 90%;
  height: 40vh;
  border-radius: 10px;
  margin-top: 5vh;
  background-image: url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
`;

const BlurredMask = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 255, 0.5);
  border-radius: 20px; /* To match the border radius of the ImageContainer */
`;
const InputContainer = styled(Box)`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the space between the input and the button */
`;
const ToDo = () => {
  return (
    <PageWrapper>
      <ImageContainer>
        <BlurredMask />
      </ImageContainer>
      <InputContainer>
        <TextField
          variant="outlined"
          placeholder="Type here..."
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  // onClick={handleButtonClick}
                  edge="end"
                >Submit
                </button>
              </InputAdornment>
            ),
          }}
        />
      </InputContainer>
    </PageWrapper>
  );
};

export default ToDo;
