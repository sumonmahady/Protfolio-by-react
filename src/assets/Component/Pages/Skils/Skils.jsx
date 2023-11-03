import { Button } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Skils = () => {
    return (
        <div className='max-h-full bg-zinc-800'>
            <div className='text-center'>
            <h1 className='text-teal-600 text-2xl font-medium'>MY SKILS</h1>
            <h1 className='text-4xl font-bold text-white py-2'>Crafting Stories through Design and Imagination</h1>
            </div>
           <div className='space-x-2 text-center py-8 '>
           <Button  variant="outlined">Educaiton</Button>
            <Button  variant="outlined">Skils</Button>
           </div>


           <div className='max-w-5xl mx-auto'>
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Education
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
           HSC <br /> Babugoj University Collage
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           </div>

        </div>
    );
};

export default Skils;