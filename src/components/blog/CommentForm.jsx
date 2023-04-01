import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"
import useBlogCalls from '../../hooks/useBlogCalls';

const CommentForm = ({id}) => {
    const [comment, setComment] = useState("")
    const {postData} = useBlogCalls()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          post: id,
          content: comment,
        };
        const url = `comments/${data.post}`
        postData(url, data)
        e.target.reset()
      };

  return (
    <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}>
          <TextField
            label="Comment"
            name="content"
            id="content"
            type="text"
            variant="outlined"
            multiline
            rows={2}
            fullWidth
            placeholder="Add a comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              "&:hover": { bgcolor: "primary.main", color:"white" },
              width: "30%"
            }}>
            Add Comment
          </Button>
        </Box>
      </form>
  )
}

export default CommentForm