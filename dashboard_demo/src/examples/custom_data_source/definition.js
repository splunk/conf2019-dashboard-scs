export default {
    dataSources: {
        total_count_search: {
            type: 'ds.search',
            options: {
                query: '| from main | stats count()',
                queryParameters: {
                    earliest: '-15m@m',
                    latest: 'now',
                },
            },
        },
    },
    layout: {
        type: 'grid',
        options: {
            padding: 20,
            margin: 10,
            backgroundColor: '#eff0f1',
        },
        structure: [
            {
                item: 'sv_total_event',
                position: {
                    x: 1,
                    y: 1,
                    w: 12,
                    h: 1,
                },
            },
        ],
    },
    title: 'Simple Dashboard',
    description: '',
    visualizations: {
        sv_total_event: {
            title: 'index=_internal event count of last 15 minutes',
            type: 'viz.singlevalue',
            options: {
                backgroundColor: '#ffffff',
            },
            dataSources: {
                primary: 'total_count_search',
            },
        },
    },
};
