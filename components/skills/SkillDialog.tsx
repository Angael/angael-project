import React from 'react';
import { proficiencyText, Skill } from './skills';
import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    styled,
    Typography,
} from '@mui/material';
import Image from 'next/image';

type Props = React.PropsWithChildren<{
    open: boolean;
    skill: Skill | null;
    onClose: () => any;
}>;

const SkillDialog = ({ open, skill, onClose }: Props) => {
    const { name, icon, longDesc, tags, proficiency, iconStyle } = skill || {};

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { overflow: 'visible' } }}
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                <Stack direction='row' alignItems='center' gap={1}>
                    <img
                        width={24}
                        height={24}
                        src={icon}
                        style={{ objectFit: 'contain', ...iconStyle }}
                    />
                    {name}
                </Stack>
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ pb: 2 }}>
                    {longDesc?.map(paragraph => (
                        <Typography key={paragraph} gutterBottom>
                            {paragraph}
                        </Typography>
                    ))}
                </DialogContentText>
                <Typography variant='body2' gutterBottom>
                    Proficiency: {proficiencyText[proficiency!]}
                </Typography>
                <Typography variant='body2'>Tags:</Typography>
                <Stack direction='row' spacing={1} mt={2} mb={-1}>
                    {tags?.map(tag => (
                        <Chip key={tag} label={tag} />
                    ))}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default SkillDialog;
