import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                },
            },
            defaultProps: {
                disableRipple: false,
            },
        },
    },
};

export default lightThemeOptions;
