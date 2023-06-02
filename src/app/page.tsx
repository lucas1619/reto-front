"use client"
import { AppBar, Box, Toolbar, Paper, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { RecursiveMenu } from '@/components/RecursiveMenu';
import { useState, useEffect } from 'react';
import { getMenuData } from '@/data/servicio';
import { MenuObject } from '@/domain/Menu';
import { Isotipo } from '@/components/Isotipo';

export default function Home() {

  const [menuData, setMenuData] = useState<MenuObject>({lista: []});

  useEffect(() => {
    getMenuData().then((data) => {
      setMenuData(data);
    });
  }, []);

  
  return (
    <div className='flex flex-col h-screen'>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Tu PruTec
              </Typography>
              <div className='flex items-center content-center'>
                    Nombre de Usuario
                    <ExpandMore className='cursor-pointer ml-2' />
                  </div>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color='transparent'>
            <RecursiveMenu menuItems={menuData.lista} level={0}/>
          </AppBar>
        </Box>

      </header>
      <main className='mb-auto' style={{
        backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff2ca5d0-5633-4ef7-b22f-934c6516d5f0/d5k14s4-37fd37c5-bddd-4ec5-9893-322e4c6fd5c6.jpg/v1/fill/w_1192,h_670,q_70,strp/minimalist_metal_wallpaper_by_malkowitch_d5k14s4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2ZmMmNhNWQwLTU2MzMtNGVmNy1iMjJmLTkzNGM2NTE2ZDVmMFwvZDVrMTRzNC0zN2ZkMzdjNS1iZGRkLTRlYzUtOTg5My0zMjJlNGM2ZmQ1YzYuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UTelkD4k4O16IigTOkn6Z34RAkNKOADQh46Q8yqCw8g')",
        height: '100vh',
      }}>
      </main>
      <Box>
        <Paper className='w-screen flex items-center justify-around py-6'>
          <Isotipo />
          <Isotipo />
        </Paper>
      </Box>
    </div>
  )
}
