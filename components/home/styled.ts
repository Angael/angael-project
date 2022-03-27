import { styled } from '@mui/material';

export const TitleContainer = styled('header')({
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
});

export const LinksGrid = styled('nav')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 10,
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}));
