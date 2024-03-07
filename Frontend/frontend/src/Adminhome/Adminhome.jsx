
import * as React from 'react';
import Stack from '@mui/material/Stack';
import AdminNav from '../AdminNav/AdminNav';
import { useNavigate,Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import add from "../assets/addnews.png";
import update from "../assets/update.png"; 
import view from '../assets/view.png';
import del from "../assets/delete.jpg";

const AdminHome = ()=>{
  const navigate=useNavigate()
    return(
        <div className='admin'>

            <AdminNav/>
            <br/>      
              <div className="admincontainer">
                <Grid container spacing={8}>
                  <Grid>
             <Stack direction="row" spacing={5}>
             <Card sx={{ width: 15 +"vw" }}>
      <CardActionArea component={Link} to="/addnews">
        <CardMedia
          component="img"
          height="140"
          image= {add}
          alt="add_news"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Add News
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: 15 +"vw" }}>
      <CardActionArea component={Link} to="/viewnews">
        <CardMedia
          component="img"
          height="140"
          image= {view}
          alt="add_news"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            View News
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    </Stack></Grid>
    <Grid>
<Stack direction="row" spacing={5}>
{/* <Card sx={{ width: 15 +"vw" }}>
      <CardActionArea component={Link} to="/updatenews">
        <CardMedia
          component="img"
          height="140"
          image= {update}
          alt="add_news"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Update News
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
    <Card sx={{ width: 15 +"vw" }}>
      <CardActionArea component={Link} to="/deletenews">
        <CardMedia
          component="img"
          height="140"
          image= {del}
          alt="add_news"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Update/Delete News
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
           
   
    
    
      </Stack>
      </Grid>
      </Grid>
    </div>  
        </div>
     )

}
export default AdminHome