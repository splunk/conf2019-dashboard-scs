export default {
    dataSources: {
        ds_1: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Eating',
                        },
                        {
                            name: 'Drinking',
                        },
                        {
                            name: 'Sleeping',
                        },
                        {
                            name: 'Designing',
                        },
                        {
                            name: 'Coding',
                        },
                        {
                            name: 'Cycling',
                        },
                        {
                            name: 'Running',
                        },
                    ],
                    columns: [[65, 28], [59, 48], [90, 40], [81, 19], [56, 96], [55, 27], [40, 100]],
                },
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {},
        structure: [
            {
                item: 'viz_aeTdCp9A',
                type: 'block',
                position: {
                    h: 540,
                    w: 740,
                    x: 430,
                    y: 30,
                },
            },
            {
                item: 'viz_EvMPCkP5',
                type: 'block',
                position: {
                    h: 340,
                    w: 370,
                    x: 50,
                    y: 30,
                },
            },
        ],
    },
    title: "Copy of Pete's a Pie",
    description: '',
    visualizations: {
        viz_EvMPCkP5: {
            type: 'viz.text',
            options: {
                content: 'Chart.JS Radar',
                fontSize: 40,
                backgroundColor: 'transparent',
            },
        },
        viz_aeTdCp9A: {
            type: 'viz.radar',
            options: { legend: true },
            dataSources: {
                primary: 'ds_1',
            },
        },
    },
};
