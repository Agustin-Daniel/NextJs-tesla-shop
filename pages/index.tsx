import { ShopLayout } from "@/components/layout";
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de teslo aqui'}>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>
    </ShopLayout>
  )
}
