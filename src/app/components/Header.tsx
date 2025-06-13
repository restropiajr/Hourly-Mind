import { FC } from 'react'
import NextLink from 'next/link'
import { Grid, Container, Box, Button } from '@mui/material'

type HeaderProps = {
  //
}

export const Header: FC<HeaderProps> = () => {
  return (
    <Box sx={{ bgcolor: '#f6e7cb', p: 4 }}>
      <Container>
        <Grid container>
          <Grid size={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button component={NextLink} variant="contained" href="/" color="primary">
                Home
              </Button>
              <Button
                component={NextLink}
                variant="contained"
                href="/payroll-calculator"
                color="primary"
              >
                Payroll Calculator
              </Button>
              <Button
                component={NextLink}
                variant="contained"
                href="/client-calculator"
                color="primary"
              >
                Client Calculator
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
