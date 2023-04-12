import { Grid, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"



const AddressPage = () => {
  return (
    <ShopLayout title={"Direccion"} pageDescription={"Confirmar direccion del destino"} >
        <Typography variant="h1" component='h1'>Direccion</Typography>

        <Grid spacing={2} container>
            <Grid item xs={12} sm={6}>
                <TextField variant="filled" label='Nombre' fullWidth />
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default AddressPage