export default {
    dataSources: {
        total_count_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | stats count',
                queryParameters: {
                    earliest: '$time.earliest$',
                    latest: '$time.latest$',
                },
            },
        },
        event_by_component_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | stats count by component',
                queryParameters: {
                    earliest: '$time.earliest$',
                    latest: '$time.latest$',
                },
            },
        },
        timechart_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | timechart count',
                queryParameters: {
                    earliest: '$time.earliest$',
                    latest: '$time.latest$',
                },
            },
        },
    },
    inputs: {
        time_range: {
            options: {
                defaultValue: '0,now',
                token: 'time',
            },
            type: 'input.timerange',
        },
    },
    layout: {
        type: 'absolute',
        options: {
            width: 1600,
            height: 800,
            backgroundColor: '#eff0f1',
            display: 'auto-scale',
        },
        globalInputs: ['time_range'],
        structure: [
            {
                item: 'sv_total_event',
                position: {
                    h: 300,
                    w: 750,
                    x: 30,
                    y: 20,
                },
            },
            {
                item: 'sv_event_by_component',
                position: {
                    h: 300,
                    w: 750,
                    x: 820,
                    y: 20,
                },
            },
            {
                item: 'event_over_time',
                position: {
                    h: 300,
                    w: 1540,
                    x: 30,
                    y: 350,
                },
            },
        ],
    },
    title: 'Simple Dashboard',
    description: '',
    visualizations: {
        sv_total_event: {
            title: '_internal event count',
            type: 'viz.singlevalue',
            options: {
                backgroundColor: '#ffffff',
            },
            dataSources: {
                primary: 'total_count_search',
            },
        },
        sv_event_by_component: {
            title: '_internal event count by component',
            type: 'viz.pie',
            dataSources: {
                primary: 'event_by_component_search',
            },
        },
        event_over_time: {
            title: '_internal event count over time',
            type: 'viz.area',
            dataSources: {
                primary: 'timechart_search',
            },
        },
    },
};
