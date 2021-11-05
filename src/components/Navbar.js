import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Navbar = (props) => {
  const { setDrawerOpen } = props;

  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isTabOrMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [currentRoute, setCurrentRoute] = useState(null);

  const handleRouteChange = (event, value) => {
    setCurrentRoute(value);
  };

  return (
    <AppBar position='static' sx={{ marginBottom: 3 }}>
      <Toolbar className={classes.AppBar}>
        {isTabOrMobile ? (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Tabs
            indicatorColor='secondary'
            textColor='inherit'
            onChange={handleRouteChange}
            value={currentRoute}
          >
            {['Posts', 'Users', 'Comments'].map((item) => {
              return (
                <Tab
                  key={item.toLowerCase()}
                  value={item.toLowerCase()}
                  label={item}
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                />
              );
            })}
          </Tabs>
        )}

        <Typography variant='h6'>{currentRoute}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
