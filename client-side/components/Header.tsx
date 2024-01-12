import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Typography variant="h6">Movie CRUD</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
