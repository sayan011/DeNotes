import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button, CardActionArea, CardActions } from "@mui/material";
const TestCard = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        <Link href="/subjects/Cs">
          <div className="transition ease-in-out hover:-translate-y-3">
            <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg"
                  alt="green iguana"
                />
                <CardContent className="">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="font-semibold"
                  >
                    COMPUTER SCIENCE
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Browse
                </Button>
              </CardActions>
            </Card>
          </div>
        </Link>
        {/* card2 */}
       
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card
            sx={{ maxWidth: 345 }}
            className="bg-slate-700 text-white w-screen "
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://assets.skyfilabs.com/images/blog/eceminiproject.jpg"
                alt="green iguana"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  ELECTRONICS
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-white"
                >
                  Lizards areoup of squamate reptiles, with over 6,000 sp except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* card3 */}
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://images.theconversation.com/files/274417/original/file-20190514-60529-ktb5t3.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                alt="green iguana"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  MATHS
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* card4 */}
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://media.istockphoto.com/vectors/blackboard-inscribed-with-scientific-formulas-and-calculations-in-vector-id936903524?k=20&m=936903524&s=612x612&w=0&h=2gzychnTuwV8BSmtmJ4avgX1wKu0I8-wQmUcXi0McIY="
                alt="physics"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  PHYSICS
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* card5 */}
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
                alt="green iguana"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  CHEMISTRY
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* card6 */}
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://miro.medium.com/max/1400/1*fg89TdH39NMYW5QR18bK7Q.png"
                alt="green iguana"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  HUMANITIES
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* card7*/}
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZB_Lk6nCCgFoPd5sjJPiP3kMmD2umOTToWLFToAPRYI4KuIIztpd3INqI-aqsPR5M4Is&usqp=CAU"
                alt="green iguana"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  MECHANICAL
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* card8*/}
        <div className="transition ease-in-out hover:-translate-y-3">
          <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="data:image/jpeg;base64,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"
                alt="green iguana"
              />
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="font-semibold"
                >
                  ELECRICAL
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="text-white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Browse
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TestCard;
