import {
  Button,
  CssBaseline,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, {useState, useEffect} from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";

const initialState = {
  title: "",
  image: "",
  category: "",
  status: "",
  content: "",
};

const NewBlog = () => {
  const [formData, setFormData] = useState(initialState);
  const { getBlogs, postData } = useBlogCalls();
  const {categories} = useSelector((state) => state.blogs)
  const url = "blogs"
  const id = "categories"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(url, formData);
    setFormData(initialState);
  };

  useEffect(() => {
    getBlogs(id)
  }, [])
  

  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: "90vh" }}>
      <CssBaseline />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        bgcolor: "white",
        border: "2px solid white",
        borderRadius: "10px",
        boxShadow: "24px 12px 12px 12px",
        mt:2,
        mb:2,
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
            New Blog
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
  );
};

export default NewBlog;
