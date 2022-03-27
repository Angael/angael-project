import React from 'react';
import { Box, Typography } from '@mui/material';
import { BtnLink } from './BtnLink';
import { ArrowBack } from '@mui/icons-material';

type Props = React.PropsWithChildren<{
    title: string;
    subtitle: string;
}>;

const TitleWithNav = (props: Props) => {
    const { title, subtitle } = props;
    return (
        <Box component='header' sx={{ mt: 2, mb: 5 }}>
            <nav>
                <BtnLink href='/' startIcon={<ArrowBack fontSize='small' />}>
                    Go Back
                </BtnLink>
            </nav>
            <Typography variant='h2' component='h1' align='center'>
                {title}
            </Typography>
            {subtitle && (
                <Typography variant='body2' component='h2' align='center'>
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default TitleWithNav;
