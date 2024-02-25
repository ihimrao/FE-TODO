import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogTitle, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthContext from '../../store/auth-context';
import axios from "../../utility/axios-instance";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const ImageContainer = styled(Box)`
  width: 90%;
  height: 45vh;
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
  top: 40%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 100%;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
`;

const TodoItem = styled.li`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-bottom: 1px solid black;
`;
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const authCtx = useContext(AuthContext);
  const { logout } = authCtx;


  useEffect(() => {
    axios
      .get("/todo")
      .then((res) => {
        setTodos(res.data.data)
      })
  }, [])

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      const d = todos || []
      setTodos([...d, { _id: "temp", title: todo, completed: false, description: "", incremental: true }]);
      setTodo('');
      // axios
      //   .post("/todo", { title: todoInput, completed: false, description: "", })
      //   .then((res) => {
      //     if (res.status === 200) {
      //       axios
      //         .get("/todo")
      //         .then((res) => {
      //           setTodos(res.data.data)
      //         })
      //     } else {
      //       setTodos([...todos.filter(it => it._id !== "temp")])
      //     }
      //   })
    }
  };
  return (
    <>
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
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ background: "white", borderRadius: "20px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <button
                    style={{ color: "white", background: "#87CEEB", border: "none", borderRadius: "5px", height: "30px", width: "80px" }}
                    onClick={() => {
                      addTodo()
                    }}
                    edge="end"
                  >Create
                  </button>
                </InputAdornment>
              ),
            }}
          />
          <TodoList style={{ maxHeight: "280px  ", overflowY: "scroll" }}>
            {todos.map((todo, index) => (
              <TodoItem key={index}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                  <IconButton>
                    <Checkbox
                      icon={<IndeterminateCheckBoxIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      checked={todo.completed}
                    />
                  </IconButton>
                  <p style={{ width: "90%", marginTop: "15px" }}>
                    {todo.title}
                  </p>
                  <IconButton>
                    <DeleteForeverIcon />
                  </IconButton>
                </div>
              </TodoItem>
            ))}
          </TodoList>
        </InputContainer>
      </PageWrapper>
      <Dialog open={false}>
        <DialogTitle>{`Do you want to delete ${todos?.[0]}?`}</DialogTitle>
        <DialogActions>
          <Button color="primary">
            No
          </Button>
          <Button color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ToDo;
