import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { TitleContainer } from './styled';

interface IProps {}

const TitleCard = (props: IProps) => {
    return (
        <TitleContainer>
            <Typography variant='h1'>Krzysztof Widacki</Typography>
            <Button>About me</Button>
            <Button>My skills</Button>
            <Button>My experience</Button>
            <Button>My projects</Button>
        </TitleContainer>
    );
};

export default TitleCard;
