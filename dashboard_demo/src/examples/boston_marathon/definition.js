import { createStaticURL } from '@splunk/splunk-utils/url';

const bgUrl = createStaticURL('app/dashboard_conf19_examples/boston_marathon/marathon_map.png');

export default {
    dataSources: {
        speed: {
            name: 'search1',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [['7.41'], ['1']],
                },
                meta: {},
            },
        },
        runTime: {
            name: 'search4',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Alan',
                        },
                        {
                            name: 'Emily',
                        },
                        {
                            name: 'Jasmin',
                        },
                    ],
                    columns: [['1:05:57'], ['1:05:57'], ['1:05:57']],
                },
                meta: {},
            },
        },
        uvIndex: {
            name: 'search11',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [['7'], ['1']],
                },
                meta: {},
            },
        },
        bodyTemp: {
            name: 'search5',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Alan',
                        },
                        {
                            name: 'Emily',
                        },
                        {
                            name: 'Jasmin',
                        },
                    ],
                    columns: [['99.6'], ['98.7'], ['99.4']],
                },
                meta: {},
            },
        },
        humidity: {
            name: 'search10',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [['63'], ['1']],
                },
                meta: {},
            },
        },
        elevation: {
            name: 'search3',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [['72'], ['1']],
                },
                meta: {},
            },
        },
        heartRate: {
            name: 'search2',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Alan',
                        },
                        {
                            name: 'Emily',
                        },
                        {
                            name: 'Jasmin',
                        },
                    ],
                    columns: [['165'], ['178'], ['172']],
                },
                meta: {},
            },
        },
        leaderBoard: {
            name: 'search8',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Place',
                        },
                        {
                            name: 'Runner',
                        },
                        {
                            name: 'Number',
                        },
                        {
                            name: 'Gap (s)',
                        },
                    ],
                    columns: [
                        ['87', '88', '89', '90', '91', '92', '93', '94'],
                        [
                            'May Cummings',
                            'Annie Zhang',
                            'Ho Simpson',
                            'Alan Duggan',
                            'Emily Melendez',
                            'Jasmin Rossi',
                            'Santiago Benson',
                            'Frederick Kamran',
                        ],
                        ['343', '1482', '1526', '974', '154', '796', '892', '1984'],
                        ['4.1', '2.3', '3.6', '5.4', '2.7', '2.1', '1.8', '7.5'],
                    ],
                },
                meta: {},
            },
        },
        paceOverTime: {
            name: 'search7',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Time',
                        },
                        {
                            name: 'Elevation (ft)',
                        },
                        {
                            name: 'Pace',
                        },
                    ],
                    columns: [
                        [
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            '10',
                            '11',
                            '12',
                            '13',
                            '14',
                            '15',
                            '16',
                            '17',
                            '18',
                        ],
                        [
                            '72',
                            '72.5',
                            '73',
                            '74',
                            '76',
                            '78',
                            '77',
                            '76',
                            '74',
                            '73',
                            '73',
                            '73',
                            '75',
                            '77',
                            '78',
                            '79',
                            '79',
                            '78',
                        ],
                        [
                            '7.7',
                            '7.6',
                            '7.4',
                            '7.3',
                            '7.3',
                            '7.2',
                            '7.3',
                            '7.4',
                            '7.5',
                            '7.5',
                            '7.6',
                            '7.6',
                            '7.4',
                            '7.3',
                            '7.2',
                            '7.2',
                            '7.3',
                            '7.4',
                        ],
                    ],
                },
                meta: {},
            },
        },
        totalCalories: {
            name: 'search6',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [['457'], ['1']],
                },
                meta: {},
            },
        },
        temperatureOverTime: {
            name: 'search9',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Time',
                        },
                        {
                            name: 'Temp (F)',
                        },
                    ],
                    columns: [
                        [
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            '10',
                            '11',
                            '12',
                            '13',
                            '14',
                            '15',
                            '16',
                            '17',
                            '18',
                        ],
                        [
                            '67',
                            '67.5',
                            '67.8',
                            '70',
                            '70',
                            '70.2',
                            '70.4',
                            '70.5',
                            '70.6',
                            '70.9',
                            '71.5',
                            '71.8',
                            '72.3',
                            '72.7',
                            '73.0',
                            '73.3',
                            '73.4',
                            '73.5',
                        ],
                    ],
                },
                meta: {},
            },
        },
    },
    inputs: {
        input1: {
            type: 'input.dropdown',
            title: 'Runner',
            options: {
                items: [
                    {
                        label: 'Alan Duggan',
                        value: 'Alan',
                    },
                    {
                        label: 'Emily Melendez',
                        value: 'Emily',
                    },
                    {
                        label: 'Jasmin Rossi',
                        value: 'Jasmin',
                    },
                ],
                token: 'runner',
                defaultValue: 'Alan',
            },
        },
    },
    layout: {
        type: 'absolute',
        options: {
            width: 1300,
            height: 750,
        },
        structure: [
            {
                item: 'viz_eGQh2uAJ',
                type: 'block',
                position: {
                    h: 730,
                    w: 1280,
                    x: 10,
                    y: 10,
                },
            },
            {
                item: 'viz_NktRExv6',
                type: 'block',
                position: {
                    h: 50,
                    w: 240,
                    x: 1050,
                    y: 30,
                },
            },
            {
                item: 'viz_FVpjprmP',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 1060,
                    y: 280,
                },
            },
            {
                item: 'viz_K0dFZZih',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 20,
                    y: 190,
                },
            },
            {
                item: 'viz_ldWRmtDi',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 20,
                    y: 100,
                },
            },
            {
                item: 'viz_cArGnIJu',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 20,
                    y: 370,
                },
            },
            {
                item: 'viz_H5PHKh4r',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 20,
                    y: 280,
                },
            },
            {
                item: 'viz_jhTJWAGU',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 1060,
                    y: 90,
                },
            },
            {
                item: 'viz_Ll1FxjWg',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 1060,
                    y: 190,
                },
            },
            {
                item: 'viz_grgU4NU9',
                type: 'block',
                position: {
                    h: 80,
                    w: 210,
                    x: 1060,
                    y: 370,
                },
            },
            {
                item: 'viz_5HKW2R1q',
                type: 'block',
                position: {
                    h: 250,
                    w: 320,
                    x: 960,
                    y: 480,
                },
            },
            {
                item: 'viz_inbNXOtv',
                type: 'block',
                position: {
                    h: 250,
                    w: 320,
                    x: 630,
                    y: 480,
                },
            },
            {
                item: 'viz_9eU4LWyM',
                type: 'block',
                position: {
                    h: 250,
                    w: 600,
                    x: 20,
                    y: 480,
                },
            },
            {
                item: 'viz_eSKryv8C',
                type: 'block',
                position: {
                    h: 50,
                    w: 210,
                    x: 20,
                    y: 30,
                },
            },
            {
                item: 'viz_JIL3sb0a',
                type: 'block',
                position: {
                    h: 60,
                    w: 500,
                    x: 280,
                    y: 30,
                },
            },
            {
                item: 'viz_q4YzAPyo',
                type: 'block',
                position: {
                    h: 450,
                    w: 770,
                    x: 260,
                    y: 30,
                },
            },
            {
                item: 'viz_ZyjJqSmo',
                type: 'block',
                position: {
                    h: 50,
                    w: 240,
                    x: 570,
                    y: 30,
                },
            },
        ],
        globalInputs: ['input1'],
    },
    title: 'Boston Marathon',
    description: '',
    visualizations: {
        viz_5HKW2R1q: {
            type: 'viz.line',
            title: 'Ambient Temperature over time',
            options: {
                fontColor: '#F5F5F5',
                seriesColors: '[#5FBCFF]',
                backgroundColor: '#15161B',
                'legend.placement': 'top',
            },
            dataSources: {
                primary: 'temperatureOverTime',
            },
        },
        viz_9eU4LWyM: {
            type: 'viz.table',
            title: 'LeaderBoard',
            options: {
                headerTextColor: '#F5F5F5',
                rowTextColorOdd: '#ACACAD',
                rowTextColorEven: '#ACACAD',
                headerBackgroundColor: '#33343B',
                rowBackgroundColorOdd: '#15161B',
                rowBackgroundColorEven: '#23242B',
            },
            dataSources: {
                primary: 'leaderBoard',
            },
        },
        viz_FVpjprmP: {
            type: 'viz.singlevalue',
            title: 'Elevation',
            options: {
                unit: 'ft',
                backgroundColor: '#33343B',
            },
            dataSources: {
                primary: 'elevation',
            },
        },
        viz_H5PHKh4r: {
            type: 'viz.singlevalue',
            title: "$runner$'s Body Temperature",
            options: {
                unit: 'F',
                field: '$runner$',
                numberPrecision: 1,
            },
            encoding: {
                fill: {
                    field: 'primary[0]',
                    format: {
                        type: 'rangevalue',
                        ranges: [
                            {
                                from: 100,
                                value: '#cb3b43',
                            },
                            {
                                to: 100,
                                from: 99.8,
                                value: '#ff7152',
                            },
                            {
                                to: 99.8,
                                from: 99.5,
                                value: '#fc9850',
                            },
                            {
                                to: 99.5,
                                value: '#53a051',
                            },
                        ],
                    },
                },
            },
            dataSources: {
                primary: 'bodyTemp',
            },
        },
        viz_JIL3sb0a: {
            type: 'viz.text',
            options: {
                content: 'Running Boston',
                fontSize: 24,
            },
        },
        viz_K0dFZZih: {
            type: 'viz.singlevalue',
            title: "$runner$'s Heart Rate",
            options: {
                unit: 'bpm',
            },
            encoding: {
                fill: {
                    field: 'primary[0]',
                    format: {
                        type: 'rangevalue',
                        ranges: [
                            {
                                from: 180,
                                value: '#cb3b43',
                            },
                            {
                                to: 180,
                                from: 160,
                                value: '#ff7152',
                            },
                            {
                                to: 160,
                                from: 150,
                                value: '#fc9850',
                            },
                            {
                                to: 150,
                                from: 140,
                                value: '#f4df7a',
                            },
                            {
                                to: 140,
                                from: 130,
                                value: '#4beba8',
                            },
                            {
                                to: 130,
                                value: '#5fbcff',
                            },
                        ],
                    },
                },
            },
            dataSources: {
                primary: 'heartRate',
            },
        },
        viz_Ll1FxjWg: {
            type: 'viz.singlevalue',
            title: 'Humidity',
            options: {
                unit: '%',
                showSparkline: false,
                backgroundColor: '#33343B',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'humidity',
            },
        },
        viz_NktRExv6: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: ' Environment Data',
                fontSize: 24,
            },
        },
        viz_ZyjJqSmo: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: 'Running Boston\n',
                fontSize: 24,
            },
        },
        viz_cArGnIJu: {
            type: 'viz.singlevalue',
            title: "$runner$'s Live Pace",
            options: {
                unit: 'mph',
                field: '$runner$',
                numberPrecision: 1,
            },
            encoding: {
                fill: {
                    field: 'primary[0]',
                    format: {
                        type: 'rangevalue',
                        ranges: [
                            {
                                from: 7,
                                value: '#53a051',
                            },
                            {
                                to: 7,
                                from: 6.5,
                                value: '#f1813f',
                            },
                            {
                                to: 6.5,
                                value: '#dc4e41',
                            },
                        ],
                    },
                },
            },
            dataSources: {
                primary: 'speed',
            },
        },
        viz_eGQh2uAJ: {
            type: 'viz.rectangle',
            options: {
                fill: '#15161B',
                stroke: '#15161B',
                strokeWidth: 0,
                strokeOpacity: 1,
            },
        },
        viz_eSKryv8C: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: 'Runner Data',
                fontSize: 24,
            },
        },
        viz_grgU4NU9: {
            type: 'viz.singlevalue',
            title: 'UV Index',
            options: {
                unit: '',
                showSparkline: false,
                backgroundColor: '#33343B',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'uvIndex',
            },
        },
        viz_inbNXOtv: {
            type: 'viz.line',
            title: 'Pace over time',
            options: {
                fontColor: '#F5F5F5',
                seriesColors: '[#5FBCFF, #C6335F]',
                'axisY2.fields': 'Pace',
                'axisY2.enabled': true,
                backgroundColor: '#15161B',
                'legend.placement': 'top',
            },
            encoding: {
                x: 'primary[0]',
                y1: 'primary.[1]',
                y2: 'primary.[2]',
            },
            dataSources: {
                primary: 'paceOverTime',
            },
        },
        viz_jhTJWAGU: {
            type: 'viz.singlevalue',
            title: 'Temperature',
            options: {
                unit: 'F',
                field: 'Temp (F)',
                showSparkline: false,
                backgroundColor: '#33343B',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'temperatureOverTime',
            },
        },
        viz_ldWRmtDi: {
            type: 'viz.singlevalue',
            title: "$runner$'s Run Time",
            options: {
                backgroundColor: '#33343B',
            },
            encoding: {},
            dataSources: {
                primary: 'runTime',
            },
        },
        viz_q4YzAPyo: {
            type: 'viz.img',
            options: {
                src: bgUrl,
                preserveAspectRatio: true,
            },
        },
    },
};
