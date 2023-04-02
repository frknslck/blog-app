import { useEffect, useState } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import CommentCard from "../components/blog/CommentCard"
import CommentForm from "../components/blog/CommentForm"

const Detail = () => {
  const [open, setOpen] = useState(false)
  const { getBlogs, postLike } = useBlogCalls()
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blogs)
  const { currentUser } = useSelector((state) => state.auth)
  let date = new Date(blogs?.publish_date)
  const detail = true
  
  useEffect(() => {
    getBlogs(id)
  }, [])

  return (
    <Container 
    // style={{ minHeight: `calc(100vh - 250px)`}}
    sx={{
      maxWidth: { xs: 500, md: 900 },
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      my:"20px",
      gap: 5,
      minHeight: `calc(100vh - 250px)`
    }}>
      <Box component="img" src={blogs?.image} sx={{
        objectFit: "contain",
        // height: 350,
        maxHeight: { xs: 350, md: 300 },
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
      <Box sx={{display: "flex", gap: 5}}>
        <Box>
          <IconButton aria-label="add to favorites" onClick={() => postLike(blogs?.id, detail)}>
            <FavoriteIcon sx={{
              color:
                blogs?.likes_n?.filter(
                  (like) => like.user_id === currentUser.id
                )[0]?.user_id && "red",
            }}/> {blogs?.likes}
          </IconButton>
          <IconButton aria-label="comment" onClick={() => setOpen(!open)}>
            <CommentIcon /> {blogs?.comment_count}
          </IconButton>
          <IconButton aria-label="views">
            <RemoveRedEyeIcon /> {blogs?.post_views}
          </IconButton>
        </Box>
      </Box>
      <Box>
        {open && 
          <Container sx={{
            display: "flex",
            flexDirection: "column",
            gap:3

          }}>
            {blogs?.comments?.map((comment) => (
              <CommentCard comment={comment} />
            ))}
            <CommentForm id={blogs?.id}/>
          </Container>
        }
      </Box>
    </Container>
  )
}

export default Detail