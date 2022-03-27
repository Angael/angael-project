import React from 'react';
import { Typography } from '@mui/material';
import { LinksGrid, TitleContainer } from './styled';
import { BtnLink } from '../shared/BtnLink';

const IndexTitleCard = () => {
    return (
        <TitleContainer>
            <Typography
                variant='h1'
                align='center'
                sx={theme => ({
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 60,
                    },
                })}
            >
                Krzysztof Widacki
            </Typography>
            <Typography variant='body2' component='h2' align='center'>
                Frontend developer
            </Typography>

            <LinksGrid sx={{ mt: 5 }}>
                <BtnLink href='/about'>About me</BtnLink>
                <BtnLink href='/skills'>My skills</BtnLink>
                <BtnLink href='/experience' buttonProps={{ disabled: true }}>
                    My experience
                </BtnLink>
                <BtnLink href='/projects'>My projects</BtnLink>
                <BtnLink href='/contact' buttonProps={{ disabled: true }}>
                    Contact
                </BtnLink>
            </LinksGrid>
        </TitleContainer>
    );
};

export default IndexTitleCard;
