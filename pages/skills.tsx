/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import TitleWithNav from '../components/shared/TitleWithNav';
import { Container, styled, Tab, Tabs } from '@mui/material';
import SkillCard from '../components/skills/SkillCard';
import { Proficiency, Skill, skills, Tag } from '../components/skills/skills';
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

    const [prof, setProf] = useState<Proficiency | null>(null);
    const [tag, setTag] = useState<Tag | null>(null);

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
                <Tabs
                    value={tag}
                    onChange={(_, v) => setTag(v)}
                    variant='scrollable'
                    scrollButtons={false}
                    sx={{
                        pb: 2,
                    }}
                >
                    <Tab label='All' value={null} />
                    <Tab label='Frontend' value={Tag.frontend} />
                    <Tab label='Backend' value={Tag.backend} />
                    <Tab label='Frameworks' value={Tag.frameworks} />
                    <Tab label='Services' value={Tag.services} />
                    <Tab label='Libraries' value={Tag.libraries} />
                    <Tab label='Languages' value={Tag.languages} />
                    <Tab label='Tools' value={Tag.tools} />
                </Tabs>
            </Container>
            <Container maxWidth='lg'>
                <Grid>
                    {skills
                        .filter(skill =>
                            tag ? skill.tags.includes(tag) : true
                        )
                        .map(skill => (
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
