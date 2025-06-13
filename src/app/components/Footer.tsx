import { FC } from 'react'
import { Grid, Container, Box, Typography, Link } from '@mui/material'

type FooterProps = {
  //
}

export const Footer: FC<FooterProps> = () => {
  return (
    <Box sx={{ bgcolor: '#f6e7cb', mt: 8, p: 4 }}>
      <Container>
        <Grid container>
          <Grid size={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Typography>© 2025 Roland Estropia Jr. All rights reserved.</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Link
                  href="https://github.com/restropiajr"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/restropiajr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://restropiajr.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Portfolio
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Typography>Contact: </Typography>
                <Link href="mailto:restropiajr@gmail.com" underline="hover">
                  restropiajr@gmail.com
                </Link>
              </Box>
              <Typography>Made with React, Next.js, and TypeScript</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
