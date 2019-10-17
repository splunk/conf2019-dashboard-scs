import React, { useState, useCallback } from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import styled from 'styled-components';
import Select from '@splunk/react-ui/Select';
import CustomDataSource from './examples/custom_data_source';
import AbsoluteDashboard from './examples/absolute_dashboard';
import BostonMarathon from './examples/boston_marathon';
import Buttercup from './examples/buttercup';
import DataCenter from './examples/data_center';
import Donut from './examples/donut';
import DynamicThemeing from './examples/dynamic_theming';
import GlassTable from './examples/glasstable';
import GridDashboard from './examples/grid_dashboard';
import Radar from './examples/radar';
import SFOAirport from './examples/sfo_airport';
import Visualzations from './examples/visualizations';

const Container = styled.div`
    margin: 20px;
`;

const examples = {
    CustomDataSource,
    AbsoluteDashboard,
    BostonMarathon,
    Buttercup,
    DataCenter,
    Donut,
    DynamicThemeing,
    GlassTable,
    GridDashboard,
    Radar,
    SFOAirport,
    Visualzations,
};

const Dashboard = () => {
    const [exampleName, setExampleName] = useState('');

    const handleChange = useCallback((e, { value }) => setExampleName(value), [
        setExampleName,
    ]);

    console.log('exampleName:', exampleName);

    const Example = examples[exampleName];

    console.log('Example:', Example);

    return (
        <Container>
            <ControlGroup label="select a dashboard">
                <Select value={exampleName} onChange={handleChange}>
                    {Object.keys(examples).map(name => (
                        <Select.Option label={name} value={name} />
                    ))}
                </Select>
            </ControlGroup>
            {Example ? <Example /> : <div>pick an example</div>}
        </Container>
    );
};

export default Dashboard;
