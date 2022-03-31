/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import TitleWithNav from '../components/shared/TitleWithNav';
import { Container, Link as MuiLink, Typography } from '@mui/material';

const yearsDiff = (d1: Date, d2: Date) =>
    Math.floor(
        // @ts-ignore
        (d2 - d1) / (1000 * 60 * 60 * 24) / 365
    );

const About: NextPage = () => {
    const yearsOld = yearsDiff(new Date('1998-04-21'), new Date());
    const sinceGPstart = yearsDiff(new Date('2019-11-1'), new Date());

    return (
        <Container maxWidth='md'>
            <Head>
                <title>About me</title>
            </Head>
            <TitleWithNav title='About me' subtitle='Who am I?' />
            <Container maxWidth='sm'>
                <Typography mb={2}>
                    I am a {yearsOld} years old, frontend developer / student.
                </Typography>
                <Typography mb={2}>
                    I started programming pretty early on at 12 years old, with
                    help from tutors. My first full program was a python command
                    line Mario game knock-off, and I was really proud of it!
                </Typography>
                <Typography mb={2}>
                    Then in technical secondary school I learned website basics.
                    This pushed me in the direction of web development. I
                    started learning on my own about creating websites with PHP,
                    jQuery, SCSS...
                </Typography>
                <Typography mb={2}>
                    My first real site is no longer up, it has been remade. It
                    was a site for my mother's business in Belgium. It's newer
                    and cleaner version looks like{' '}
                    <MuiLink href='https://psychologonline.be/'>this.</MuiLink>
                </Typography>
                <Typography mb={2}>
                    My first job was in PHP + custom solutions kind of web
                    development that I didn't really like, but I had to start
                    earning money to pay for my University. The company that
                    employed me doesn't exist anymore.
                </Typography>
                <Typography mb={2}>
                    My current job is for{' '}
                    <MuiLink href='https://grupapracuj.pl/'>
                        Grupa Pracuj.
                    </MuiLink>{' '}
                    I work on React frontend which I really like even after{' '}
                    {sinceGPstart} years of professional work. I get to learn
                    from a lot of experienced front/backend developers and
                    architects - that was my goal from the start!
                </Typography>
                <Typography mb={2} align='right'>
                    Krzysztof Widacki
                </Typography>
                <Typography
                    variant='caption'
                    sx={{ display: 'block', color: 'text.secondary' }}
                    mb={2}
                    align='right'
                >
                    This page was updated in March 2022
                </Typography>
            </Container>
        </Container>
    );
};

export default About;
