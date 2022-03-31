/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import TitleWithNav from '../components/shared/TitleWithNav';
import {
    Container,
    Link as MuiLink,
    Stack,
    styled,
    Typography,
} from '@mui/material';

const SmallImg = styled('img')({
    width: 32,
    height: 32,
});

const About: NextPage = () => {
    return (
        <Container maxWidth='md'>
            <Head>
                <title>Contact</title>
            </Head>
            <TitleWithNav
                title='Contact'
                subtitle='How to get in touch with me?'
            />
            <Container maxWidth='sm' sx={{ mt: 15 }}>
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    mb={4}
                    gap={1}
                >
                    <SmallImg src='/img/linkedin.svg' />
                    <Typography>
                        My LinkedIn,{' '}
                        <MuiLink href='https://www.linkedin.com/in/krzysztof-widacki-68460712b/'>
                            If you really want to...
                        </MuiLink>
                    </Typography>
                </Stack>

                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    mb={4}
                    gap={1}
                >
                    <SmallImg src='/img/github-transparent-dark.png' />
                    <Typography>
                        Also my Github profile:{' '}
                        <MuiLink href='https://github.com/Angael'>Link</MuiLink>
                    </Typography>
                </Stack>
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography>
                        <MuiLink href='mailto:krzysztofwidacki@gmail.com'>
                            Maybe e-mail me? Probably the best way
                        </MuiLink>
                    </Typography>
                </Stack>
            </Container>
        </Container>
    );
};

export default About;
