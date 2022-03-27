import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
} from '@mui/material';
import { BtnLink } from '../shared/BtnLink';
import { Project } from './projects';

type Props = React.PropsWithChildren<Project>;

const ProjectCard = (props: Props) => {
    const { name, description, imgSrc, tags = [], source, href } = props;

    return (
        <Card variant='outlined'>
            {imgSrc && <CardMedia component='img' src={imgSrc} />}
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
                <Typography color='text.secondary'>{description}</Typography>
                <Stack direction='row' spacing={1} mt={2} mb={-1}>
                    {tags.map(tag => (
                        <Chip key={tag} label={tag} />
                    ))}
                </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                {source && <BtnLink href={source}>Source</BtnLink>}
                {href && <BtnLink href={href}>Link</BtnLink>}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
