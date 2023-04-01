import { useEffect, useState } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
const Detail = () => {
  const [open, setOpen] = useState(false)
  const { getBlogs, postLike } = useBlogCalls()
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blogs)
  let date = new Date(blogs?.publish_date)
  const detail = true
  
  const handleLike = (id) => {
    postLike(id, detail)
  }

  const handleComment = () => {

  }
  
  useEffect(() => {
    getBlogs(id)
  }, [])

  return (
    <Container sx={{
      maxWidth: { xs: 500, md: 900 },
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      my:"20px",
      gap: 5
    }}>
      <Box component="img" src={blogs?.image} sx={{
        objectFit: "contain",
        height: 350,
        // maxHeight: { xs: 350, md: 250 },
      }}/>
      <Box component="header" sx={{
        display: "flex",
        alignItems: "center",
        gap: 2
      }}>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
            {blogs?.author?.charAt().toUpperCase()}
        </Avatar>
        <Box>
          <Typography>{blogs?.author}</Typography>
          <Typography>{date.toLocaleString()}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='h5' sx={{mb: 1}}>{blogs?.title}</Typography>
        <Typography variant='body1' >{blogs?.content}</Typography>
      </Box>
      <Box disableSpacing sx={{display: "flex", gap: 5}}>
        <Box>
          <IconButton aria-label="add to favorites" onClick={() => handleLike(blogs?.id)}>
            <FavoriteIcon /> {blogs?.likes}
          </IconButton>
          <IconButton aria-label="comment" onClick={() => setOpen(!open)}>
            <CommentIcon /> {blogs?.comment_count}
          </IconButton>
          <IconButton aria-label="views">
            <RemoveRedEyeIcon /> {blogs?.post_views}
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default Detail