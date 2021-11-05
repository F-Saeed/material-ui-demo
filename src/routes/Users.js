import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Loader from 'react-loader-spinner';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  loader: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100vh',
  },
});

const Users = () => {
  const classes = useStyles();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => setUsers(resp.data));
  }, []);

  console.log(users);
  return (
    <Grid container spacing={3}>
      {users ? (
        users.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant='h6'>{user.name}</Typography>
                <Typography variant='body2'>{user.website}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Paper className={classes.loader} square>
          <Loader type='TailSpin' color='#00BFFF' height={80} width={80} />
        </Paper>
      )}
    </Grid>
  );
};

export default Users;
