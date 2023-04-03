import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Button, TextField  } from "@mui/material";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box"
import useAuthCall from "../hooks/useAuthCall";
import { Edit, Save } from '@mui/icons-material';
import { useState } from "react";


const Profile = () => {
  const {currentUser} = useSelector((state) => state.auth)
  const {username, first_name, last_name, image} = currentUser
  const [user, setUser] = useState({
    username: username,
    first_name: first_name,
    last_name: last_name,
  });

  const [isEditing, setIsEditing] = useState(false);

  const { updateProfile } = useAuthCall()

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile(user)
    console.log(user);
    setIsEditing(false);
  };

  return (
    <>
      <Box style={{ minHeight: `calc(100vh - 230px)`}} >
      <Card
        sx={{
          maxWidth: 345,
          height: "700px",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          borderRadius: "10px"
        }}>
          <CardMedia
          component="img"
          image={image}
          alt="blog image"
          sx={{
            p: 1,
            objectFit: "contain",
            width: {xs: "150px", md: "250px"},
            textAlign: "center"
          }}
        />
        <CardContent>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {xs: "row", md: "column"},
              gap:3
            }}>
            <form onSubmit={handleSubmit} style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxWidth: 400,
              margin: "0 auto",
            }}>
              <TextField
                label="Username"
                name="username"
                value={user?.username}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <TextField
                label="First Name"
                name="firstName"
                value={user?.first_name}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={user?.last_name}
                onChange={handleChange}
                disabled={!isEditing}
              />  
              <Box sx={{
                mt: 2,
                display: "flex",
                gap: 3,
              }}>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  startIcon={<Edit />}
                  onClick={handleEditClick} 
                  disabled={isEditing}
                >
                  Edit Profile
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Save />}
                  disabled={!isEditing}
                >
                  Save Profile
                </Button>
              </Box>
            </form>
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </>
  )
}

export default Profile