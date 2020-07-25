import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';

import MainRouter from './MainRouter';

export default () => {

    return <BrowserRouter>
        <ThemeProvider theme={theme}>
            <MainRouter />
        </ThemeProvider>
    </BrowserRouter>
}