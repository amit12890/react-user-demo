import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <List
      sx={{
        width: "90%",
        maxWidth: "30rem",
        margin: "2rem auto",
        bgcolor: "background.paper",
      }}
    >
      {props.users.map((user) => (
        <div>
          <ListItem alignItems="flex-start" key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.age}
                  </Typography>
                  {" — Years old"}
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default UserList;
