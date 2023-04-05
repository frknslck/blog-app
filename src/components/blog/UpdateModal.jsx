import {
    Button,
    CssBaseline,
    MenuItem,
    TextField,
    Typography,
    Modal
  } from "@mui/material";
  import { Box, Container } from "@mui/system";
  import React, { useState } from "react";
  import useBlogCalls from "../../hooks/useBlogCalls";
  import { useSelector } from "react-redux";
  
  
  const UpdateModal = ({blogs, openModal, setOpenModal}) => {
    const initialState = {
          title: blogs.title,
          image: blogs.image,
          category: blogs.category,
          status: blogs.status,
          content: blogs.content,
    };
    const [formData, setFormData] = useState(initialState);
    const { putBlog } = useBlogCalls();
    const {categories} = useSelector((state) => state.blogs)
    const id = blogs.id
    
    const handleSubmit = (e) => {
        e.preventDefault();
        putBlog(id, formData);
        setFormData(initialState);
        setOpenModal(false)
    };
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <>
      <Modal 
        open={openModal} 
        onClose={() => {
          setOpenModal(false);
          setFormData(initialState)
        }}
      >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          bgcolor: "white",
          boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          borderRadius: "10px",
          mt:"2rem"
        }}>
          <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "darkslategray",
                letterSpacing: "3px",
                fontFamily: "fantasy",
                marginTop: "10px",
              }}>
              Update Blog
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              color="success"
              value={formData.title || ""}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image URL"
              type="url"
              id="imageUrl"
              color="success"
              value={formData.image || ""}
              onChange={handleChange}
            />
  
            <TextField
              margin="dense"
              select
              fullWidth
              label="Category"
              id="category"
              name="category"
              value={formData.category || ""}
              onChange={handleChange}
              required>
              <MenuItem>Please choose...</MenuItem>
              {categories?.map((category) => {
                return (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              margin="dense"
              select
              fullWidth
              label="Status"
              id="status"
              name="status"
              value={formData.status || ""}
              onChange={handleChange}
              required>
              <MenuItem>Please choose...</MenuItem>
              <MenuItem value="d">Draft</MenuItem>
              <MenuItem value="p">Published</MenuItem>
            </TextField>
            <TextField
              placeholder="Content"
              multiline
              rows={2}
              margin="normal"
              required
              fullWidth
              name="content"
              label="Content"
              id="content"
              color="success"
              value={formData.content || ""}
              onChange={handleChange}
            />
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "secondary.main" },
              }}>
              New Blog
            </Button>
          </Box>
        </Box>
      </Container>
      </Modal>
      </>
    );
  };
  
  export default UpdateModal;
  