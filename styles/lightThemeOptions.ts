import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
};

export default lightThemeOptions;
