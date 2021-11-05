import Box from '@mui/material/Box';
import { Drawer as MUIDrawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const Drawer = (props) => {
  const { drawerOpen, setDrawerOpen } = props;

  const navigate = useNavigate();

  return (
    <Box sx={{ width: 250 }}>
      <MUIDrawer
        variant='temporary'
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: 250 }}
      >
        <List>
          {['Posts', 'Users', 'Comments'].map((item) => {
            return (
              <ListItem
                button
                key={item.toLowerCase()}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
              >
                <ListItemText>{item}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    </Box>
  );
};

export default Drawer;
