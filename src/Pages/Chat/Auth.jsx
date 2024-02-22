import { Box, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
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
  border-radius: 20px;
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
  font-weight: 900;
  background-color: rgba(173, 64, 255, 0.5);
  border-radius: 20px;
`;
const InputContainer = styled(Box)`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the space between the input and the button */
`;
const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const TodoItem = styled.li`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const ToDo = () => {
  const [todos, setTodos] = useState(["sd", "sd", "sdd"]);
  return (
    <PageWrapper>
      <ImageContainer>
        <BlurredMask />
      </ImageContainer>
      <InputContainer>
        <p style={{ width: "100%", fontWeight: "900", fontSize: "30px", color: "wheat" }}>TODOS</p>
        <TextField
          variant="outlined"
          placeholder="Type here..."
          fullWidth
          style={{ background: "white", borderRadius: "20px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  style={{ color: "white", background: "#87CEEB", border: "none", borderRadius: "5px", height: "30px", width: "80px" }}
                  // onClick={handleButtonClick}
                  edge="end"
                >Create
                </button>
              </InputAdornment>
            ),
          }}
        />
      </InputContainer>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index}>{todo}</TodoItem>
        ))}
      </TodoList>
    </PageWrapper>
  );
};

export default ToDo;
