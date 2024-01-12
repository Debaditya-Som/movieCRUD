import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-blue-500"> 
      <Container>
        <Toolbar>
          <Typography variant="h6" className="text-white">Movie CRUD</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
