import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SubjectCard = () => {
  return (
    <>
      <div>
        <Link href="/noteDetails/Details">
          <div className="transition ease-in-out hover:-translate-y-3">
            <Card sx={{ maxWidth: 345 }} className="bg-slate-700 text-white ">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image="https://image.slidesharecdn.com/dynamicprogramming-160512234533/85/dynamic-programming-2-320.jpg?cb=1463096779"
                />
                <CardContent className="">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="font-semibold"
                  >
                    Dynamic programming
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-white"
                  >
                    Dynamic programming helps to solve a complex problem by
                    breaking it down into a collection of simpler subproblems,
                    solving each of those sub-problems just once, and storing
                    their solutions.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <div className="flex p-3">
                  <p className="px-2 py-2 font-semibold ">0.0002 ETH</p>

                  <Button
                    size="large"
                    color="primary"
                    className="ml-32 pr-4 text-l text-white bg-blue-600 rounded-lg hover:bg-blue-200 hover:text-slate-800"
                  >
                    BUY
                  </Button>
                </div>
              </CardActions>
            </Card>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SubjectCard;
