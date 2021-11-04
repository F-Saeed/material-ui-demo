import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@emotion/react';

const useStyles = makeStyles({
  AppBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Navbar = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <AppBar color='transparent' enableColorOnDark='true' position='static'>
      <Toolbar className={classes.AppBar}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Toolbar>
          <Button color='secondary' onclick={() => navigate('/posts')}>
            Posts
          </Button>
          <Button color='secondary' onclick={() => navigate('/users')}>
            Users
          </Button>
          <Button color='secondary' onclick={() => navigate('/comments')}>
            Comments
          </Button>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
