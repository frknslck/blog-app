import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Button } from '@mui/material';
import useBlogCalls from '../../hooks/useBlogCalls';
import { useNavigate } from 'react-router-dom';

export default function RecipeReviewCard({ blog }) {
  const { postLike } = useBlogCalls();
  const navigate = useNavigate()
  let date = new Date(blog?.publish_date)

  const handleLike = (id) => {
    postLike(id)
  }

  const handleNavigate = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 345, height: { xs: 'none', md: '550' } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {blog?.author.charAt().toUpperCase()}
          </Avatar>
        }
        title={blog?.author}
        subheader={date.toLocaleString()}
      />
      <CardMedia
        component="img"
        image={blog?.image}
        alt="blog image"
        sx={{
          p: 1,
          objectFit: "contain",
          height: "150px",
          my: "1rem",
        }}
      />
      <CardContent>
        <Typography variant='h5' sx={{textAlign: "center", mb: "1rem"}}>
          {blog?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: { xs: 'none', md: 'block' },
          textOverflow: 'ellipsis',
          whiteSpace: "break-word",
          height: { xs: 'none', md: 100 },
          mb: "1rem"
          }}>
          {blog?.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display: "flex", justifyContent: "space-around", gap: 5}}>
        <Box>
          <IconButton aria-label="add to favorites" onClick={() => handleLike(blog?.id)}>
            <FavoriteIcon /> {blog?.likes}
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon /> {blog?.comment_count}
          </IconButton>
          <IconButton aria-label="views">
            <RemoveRedEyeIcon /> {blog?.post_views}
          </IconButton>
        </Box>
        <Button variant='outlined' color='secondary' onClick={() => handleNavigate(blog?.id)}>Read More</Button>
      </CardActions>
    </Card>
  );
}