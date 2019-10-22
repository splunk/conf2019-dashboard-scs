import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, {
    themes as dashboardCoreThemes,
} from '@splunk/dashboard-core';
import CloudViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/CloudViewOnlyPreset';
import definition from './definition.json';
import Donut from './Donut';
import authClient from '../../auth';
import { tenantId } from '../../config/config.json';

const CustomPreset = {
    ...CloudViewOnlyPreset,
    visualizations: {
        ...CloudViewOnlyPreset.visualizations,
        'viz.donut': Donut,
    },
};

const themeKey = 'scp';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey],
};
// use DashboardCore to render a simple dashboard
export default () => (
    <ThemeProvider theme={theme}>
        <DashboardCore
            width="100%"
            height="calc(100vh - 78px)"
            definition={definition}
            preset={CustomPreset}
            dataSourceContext={{
                tenantId,
                authClient,
            }}
        />
    </ThemeProvider>
);
