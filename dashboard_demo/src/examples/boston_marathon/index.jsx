import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, {
    themes as dashboardCoreThemes,
} from '@splunk/dashboard-core';
import EnterprisePreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterprisePreset';
import definition from './definition.json';
import authClient from '../../auth';
import { tenantId } from '../../config/config.json';

const themeKey = 'enterpriseDark';
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
            preset={EnterprisePreset}
            dataSourceContext={{
                tenantId,
                authClient,
            }}
        />
    </ThemeProvider>
);
