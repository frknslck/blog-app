import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const CommentCard = ({comment}) => {
  let date = new Date(comment.time_stamp)

  return (
    <Paper elevation={4} sx={{
        padding: 3
      }}>
        <Box component="header" sx={{
          display: "flex",
          alignItems: "center",
          gap: 2
        }}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
              {comment.user.charAt().toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant='body1'>{comment.user}</Typography>
            <Typography variant='body1'>{date.toLocaleString()}</Typography>
          </Box>
        </Box>
        <Box>
            <Typography>
                {comment.content}
            </Typography>
        </Box>
      </Paper>
  )
}

export default CommentCard