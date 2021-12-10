import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import { FormControl, Box } from "@mui/material";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (>0)",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const onUserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Snackbar open={true} autoHideDuration={6000} onClose={errorHandler}>
          <Alert onClose={errorHandler} severity="error" sx={{ width: "100%" }}>
            {error.message}
          </Alert>
        </Snackbar>
      )}
      <form onSubmit={addUserHandler}>
        <Card className={classes.card}>
          <div>
            <TextField
              margin="normal"
              fullWidth
              required
              id="userName"
              type="text"
              label="Username"
              variant="outlined"
              value={enteredUserName}
              margin="dense"
              onChange={onUserNameChangeHandler}
            />
          </div>
          <div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              type="number"
              label="Age"
              variant="outlined"
              value={enteredAge}
              margin="dense"
              onChange={onAgeChangeHandler}
            />
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add User
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default AddUser;
