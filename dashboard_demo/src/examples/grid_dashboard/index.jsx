import React from 'react';
import DashboardCore from '@splunk/dashboard-core';
import CloudViewOnlyPreset from '@splunk/dashboard-presets/CloudViewOnlyPreset';
import definition from './definition.json';
import authClient from '../../auth';
import { tenantId } from '../../config/config.json';

// use DashboardCore to render a simple dashboard
export default () => (
    <DashboardCore
        width="100%"
        height="calc(100vh - 78px)"
        definition={definition}
        preset={CloudViewOnlyPreset}
        dataSourceContext={{
            tenantId,
            authClient,
        }}
    />
);
