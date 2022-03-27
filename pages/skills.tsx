/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import TitleWithNav from '../components/shared/TitleWithNav';
import { Container, styled } from '@mui/material';
import SkillCard from '../components/skills/SkillCard';
import { Skill, skills } from '../components/skills/skills';
import { useState } from 'react';
import SkillDialog from '../components/skills/SkillDialog';

const Grid = styled('div')(({ theme }) => ({
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fill, 155px)',
    gridAutoFlow: 'row dense',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        gap: 8,
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}));

const Skills: NextPage = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const onClick = (skill: Skill) => {
        setSelectedSkill(skill);
        setOpen(true);
    };

    return (
        <>
            <Container maxWidth='md' sx={{ pb: 5 }}>
                <Head>
                    <title>Skills</title>
                </Head>
                <TitleWithNav title='Skills' subtitle='What do I do well?' />
            </Container>
            <Container maxWidth='lg'>
                <Grid>
                    {skills.map(skill => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            onClick={onClick}
                        />
                    ))}
                </Grid>
            </Container>
            <SkillDialog
                open={open}
                skill={selectedSkill}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default Skills;
