/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import TitleWithNav from '../components/shared/TitleWithNav';
import { Container, Stack } from '@mui/material';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../components/projects/projects';

const Projects: NextPage = () => {
    return (
        <Container maxWidth='md' sx={{ pb: 5 }}>
            <Head>
                <title>Projects</title>
            </Head>
            <TitleWithNav
                title='Projects'
                subtitle='What did I create and publish to the world?'
            />
            <Container maxWidth='sm'>
                <Stack direction='column' gap={4}>
                    {projects.map(project => (
                        <ProjectCard {...project} key={project.name} />
                    ))}
                </Stack>
            </Container>
        </Container>
    );
};

export default Projects;
