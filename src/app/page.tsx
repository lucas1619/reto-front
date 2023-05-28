"use client"
import {AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';


export default function Home() {
  return (
    <>
      <header>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Tu PruTec
          </Typography>
          <div className='flex items-center content-center'>
                Nombre de usuario
                <ExpandMore className='cursor-pointer ml-2' />
              </div>
        </Toolbar>
      </AppBar>
    </Box>
      </header>
      <main>
        cuerpo
      </main>
      <footer>
        pies
      </footer>
    </>
  )
}
