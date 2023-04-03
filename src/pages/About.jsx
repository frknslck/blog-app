import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/logo.png"

const About = () => {
  return (
    <>
      <Box style={{ minHeight: `calc(100vh - 230px)`}} >
      <Card
        sx={{
          maxWidth: 345,
          height: "500px",
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
          image={logo}
          alt="blog image"
          sx={{
            p: 1,
            objectFit: "contain",
            height: {xs: "300px", md: "400px"},
          }}
        />
        <CardContent>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <IconButton
              href="https://www.linkedin.com/in/furkansb/"
              target="true">
              <LinkedInIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 35,
                }}
              />
            </IconButton>
            <IconButton
              href="https://twitter.com/clarusway?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="true">
              <GitHub
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 35,
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="true">
              <YouTubeIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 35,
                }}
              />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </>
  )
}

export default About