'use client';

import { useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

export default function ImageGallery({ imageData, columns }: { imageData: string[]; columns: number }) {
  return (
    <Box sx={{ maxWidth: '100em', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      <Masonry columns={columns} spacing={2} sx={{ alignContent: 'center' }}>
        {imageData.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-md">
            <img
              className="hover:scale-[1.2] transition-all duration-200 ease-in-out"
              srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
              src={`${item}?w=162&auto=format`}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
