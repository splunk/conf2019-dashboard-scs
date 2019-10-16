import React from 'react';
import layout from '@splunk/react-page';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, {
    themes as dashboardCoreThemes
} from '@splunk/dashboard-core';
import CloudViewOnlyPreset, {
    themes as presetThemes
} from '@splunk/dashboard-presets/CloudViewOnlyPreset';
import definition from './definition';

const themeKey = 'enterpriseDark';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey]
};
// use DashboardCore to render a simple dashboard
layout(
    <ThemeProvider theme={theme}>
        <DashboardCore
            width="100%"
            height="calc(100vh - 78px)"
            definition={definition}
            preset={CloudViewOnlyPreset}
        />
    </ThemeProvider>,
    {
        pageTitle: 'Glasstable',
        hideFooter: true,
        layout: 'fixed'
    }
);
