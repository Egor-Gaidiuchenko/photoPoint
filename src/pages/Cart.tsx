import {
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
  Divider,
  Box,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../hooks';
import { removeFromCart } from '../store/slices/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box component={Paper} elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>🛒 Корзина</Typography>
      {cart.length === 0 ? (
        <Typography>Корзина пуста</Typography>
      ) : (
        <Stack spacing={2}>
          {cart.map(item => (
            <Card key={item.id} variant="outlined">
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography fontWeight={500}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.quantity} x ${item.price}
                  </Typography>
                </Box>
                <IconButton onClick={() => dispatch(removeFromCart(item.id))} color="error">
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
          <Divider />
          <Typography variant="h6" align="right">Итого: ${total.toFixed(2)}</Typography>
        </Stack>
      )}
    </Box>
  );
}
