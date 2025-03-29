import { AppBar, Toolbar, Typography, Button, Badge, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export default function Navbar() {
  const cartCount = useAppSelector(state => state.cart.items.length);

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <Button component={RouterLink} to="/" color="inherit">Каталог</Button>
          </Typography>
          <Badge badgeContent={cartCount} color="error">
            <Button component={RouterLink} to="/cart" color="inherit">Корзина</Button>
          </Badge>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
