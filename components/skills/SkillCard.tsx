import React from 'react';
import { proficiencyText, Skill } from './skills';
import { ButtonBase, Stack, Typography } from '@mui/material';

type Props = React.PropsWithChildren<{
    skill: Skill;
    onClick: (skill: Skill) => any;
}>;

const SkillCard = (props: Props) => {
    const { skill, onClick } = props;
    const { name, icon, longDesc, tags, proficiency, iconStyle } = skill;

    return (
        <Stack
            direction='column'
            justifyContent='center'
            component={ButtonBase}
            focusRipple={true}
            onClick={() => onClick(skill)}
            sx={{
                p: 1,
                transition: '0.1s',
                '&:hover': {
                    bgcolor: 'grey.100',
                },
            }}
        >
            {icon && (
                <img
                    width={130}
                    height={80}
                    src={icon}
                    style={{ objectFit: 'contain', ...iconStyle }}
                />
            )}
            <Typography variant='h5' component='div' textAlign='center'>
                {name}
            </Typography>
            <Typography variant='caption' component='div' textAlign='center'>
                {proficiencyText[proficiency]}
            </Typography>
        </Stack>
    );
};

export default SkillCard;
