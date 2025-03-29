import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material';
import { useAppDispatch } from '../hooks';
import { addToCart } from '../store/slices/cartSlice';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
          {product.title.length > 60 ? product.title.slice(0, 60) + '…' : product.title}
        </Typography>
        <Typography variant="h6" color="primary">${product.price}</Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            dispatch(addToCart(product))
          }
        >
          В корзину
        </Button>
      </Box>
    </Card>
  );
}
