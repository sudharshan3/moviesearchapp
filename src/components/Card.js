import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 const ActionAreaCard=(props)=> {
  return (
    <Card sx={{ maxWidth: 300 , minWidth: 200 }} style={{margin:"1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {props.cardtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;