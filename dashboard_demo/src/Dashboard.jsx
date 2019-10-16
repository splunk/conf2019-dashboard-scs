import React, { useState, useCallback } from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Select from '@splunk/react-ui/Select';
import CustomDataSource from './examples/custom_data_source';

const examples = {
    custom_data_source: CustomDataSource
};

const Dashboard = () => {
    const [exampleName, setExampleName] = useState('');

    const handleChange = useCallback((e, { value }) => setExampleName(value), [
        setExampleName
    ]);

    console.log('exampleName:', exampleName);

    const Example = examples[exampleName];

    console.log('Example:', Example);

    return (
        <>
            <ControlGroup label="select a dashboard">
                <Select value={exampleName} onChange={handleChange}>
                    <Select.Option
                        label="custom data source"
                        value="custom_data_source"
                    />
                </Select>
            </ControlGroup>
            {Example ? <Example /> : <div>pick an example</div>}
        </>
    );
};

export default Dashboard;
