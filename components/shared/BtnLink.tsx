import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from '@mui/material';

type Props = React.PropsWithChildren<{
    href: string;
    startIcon?: ButtonProps['startIcon'];
    endIcon?: ButtonProps['endIcon'];
    buttonProps?: any;
}>;
export const BtnLink = ({
    children,
    href,
    startIcon,
    endIcon,
    buttonProps,
}: Props) => {
    return (
        <Link href={href} passHref>
            <Button
                component='a'
                startIcon={startIcon}
                endIcon={endIcon}
                {...buttonProps}
            >
                {children}
            </Button>
        </Link>
    );
};
