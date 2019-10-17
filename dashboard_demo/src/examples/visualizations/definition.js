export default {
    visualizations: {
        viz_oW1DFpN4: {
            type: 'viz.singlevalue',
            options: {
                unit: '$',
                showSparkline: true,
                showTrendIndicator: true,
                sparklinePosition: 'after',
                unitPosition: 'before',
                colorMode: 'block',
                rangeValues: [100, 200, 300, 400, 500, 600, 700, 1000],
                rangeColors: [
                    '#FFFFFF',
                    '#1E3765',
                    '#3C6DC7',
                    '#7755F6',
                    '#EB3844',
                    '#F3A846',
                    '#F6CF47',
                    '#09D0AC',
                ],
                sparklineStrokeColor: '#ffffff',
                showSparklineTooltip: true,
                sparklineHighlightSegments: 6,
                sparklineHighlightDots: 7,
                trendDisplayMode: 'percent',
                useThousandSeparators: true,
            },
            dataSources: {
                primary: 'search1',
            },
        },
        viz_Fx3n0Ryb: {
            type: 'viz.table',
            options: {
                useThousandSeparators: true,
                rowNumbers: true,
                precision: 2,
                count: 10,
                unit: '$',
                unitPosition: 'before',
                dataOverlayMode: 'heatmap',
                seriesColors: '[#377D5E,#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD]',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_rlZig9jt: {
            type: 'viz.scatter',
            options: {
                'axisTitleX.text': 'X Axis Label',
                'axisTitleY.text': 'Y Axis Label',
                seriesColors: '[#377D5E,#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD]',
                fieldColors: '{foo: #3C6DC7, bar: #619FDD}',
                backgroundColor: '#ffffff',
                fontColor: '#616161',
                'axisY.scale': 'log',
                'axisX.scale': 'linear',
                'axisY.minimumNumber': 0,
                'axisY.maximumNumber': 20,
                'axisX.minimumNumber': 'auto',
                'axisX.maximumNumber': 'auto',
                'gridLinesY.showMajorLines': false,
                'gridLinesY.showMinorLines': true,
                'gridLinesX.showMinorLines': false,
                'legend.placement': 'top',
                'chart.markerSize': 3,
                'chart.stackMode': 'stacked',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_Y2K9IPX1: {
            type: 'viz.pie',
            options: {
                'chart.showLabels': false,
                'chart.showPercent': true,
                'chart.sliceCollapsingThreshold': 0.01,
                'chart.sliceCollapsingLabel': 'All Others',
                seriesColors: '[#377D5E,#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD,#C2D48D]',
                backgroundColor: 'transparent',
            },
            dataSources: {
                primary: 'search4',
            },
        },
        viz_lkNu67ZT: {
            type: 'viz.line',
            dataSources: {
                primary: 'search3',
            },
            options: {
                seriesColors: '[#377D5E,#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD]',
                lineDashStyle: 'shortDashDotDot',
                'axisTitleX.text': 'X Axis Label',
                'axisTitleY.text': 'Y Axis Label',
            },
        },
        viz_VadW0za4: {
            type: 'viz.img',
            options: {
                src: 'http://www.splunk.com/content/dam/splunk2/images/social/splunk-logo.jpg',
                preserveAspectRatio: true,
            },
        },
        viz_1cid4qzH: {
            type: 'viz.bubble',
            options: {
                seriesColors: '[#9EC9A3,#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD]',
                'axisTitleX.text': 'X Axis Label',
                'axisTitleY.text': 'Y Axis Label',
            },
            dataSources: {
                primary: 'search7',
            },
        },
        viz_0GpGxyGL: {
            type: 'viz.bar',
            options: {
                seriesColors: '[#66D8D2,#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD]',
                'axisTitleX.text': 'X Axis Label',
                'axisTitleY.text': 'Y Axis Label',
                'chart.stackMode': 'stacked',
            },
            encoding: {
                x: 'primary.sourcetype',
                y: 'primary.count',
                y2: 'primary.percent',
            },
            dataSources: {
                primary: 'search4',
            },
        },
        viz_U1tPGupr: {
            type: 'viz.area',
            options: {
                seriesColors: '[#09D0AC,#F6CF47,#CF5656,#EB3844, #DB5566, #3C6DC7, #619FDD]',
                'axisTitleX.text': 'X Axis Label',
                'axisTitleY.text': 'Y Axis Label',
                'chart.stackMode': 'stacked',
            },
            encoding: {
                x: 'primary._time',
                y: 'primary[1]',
                y2: 'primary[2]',
            },
            dataSources: {
                primary: 'search3',
            },
        },
        viz_sn0IH59g: {
            type: 'viz.text',
            options: {
                content: 'Sample Viz Snippets',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 65,
            },
        },
    },
    dataSources: {
        search1: {
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
                    columns: [
                        ['100', '200', '300', '430', '340', '600', '700', '850', '900'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
            name: 'search1',
        },
        search2: {
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
                    columns: [
                        [
                            '100000.8765',
                            '200000.88998',
                            '300000.5675',
                            '4300000.8765',
                            '340000.8765',
                            '60000.4566',
                            '70000.333',
                            '8500000.8765',
                            '900000.22233',
                            '70000.333',
                            '8500000.8765',
                            '900000.22233',
                        ],
                        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    ],
                },
                meta: {},
            },
            name: 'search2',
        },
        search3: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: '_time',
                        },
                        {
                            name: '10.1.1.000',
                            data_source: 'sum(date_hour)',
                            splitby_field: 'clientip',
                            splitby_value: '10.1.1.000',
                        },
                        {
                            name: '10.1.1.002',
                            data_source: 'sum(date_hour)',
                            splitby_field: 'clientip',
                            splitby_value: '10.1.1.002',
                        },
                        {
                            name: '_span',
                        },
                    ],
                    columns: [
                        [
                            '2017-08-20T00:00:00.000-07:00',
                            '2017-08-20T00:30:00.000-07:00',
                            '2017-08-20T01:00:00.000-07:00',
                            '2017-08-20T01:30:00.000-07:00',
                            '2017-08-20T02:00:00.000-07:00',
                            '2017-08-20T02:30:00.000-07:00',
                            '2017-08-20T03:00:00.000-07:00',
                            '2017-08-20T03:30:00.000-07:00',
                            '2017-08-20T04:00:00.000-07:00',
                            '2017-08-20T04:30:00.000-07:00',
                        ],
                        ['000', '200', '170', '100', '22', '301', '430', '104', '221', '42'],
                        ['20', '302', '332', '112', '460', '154', '121', '36', '576', '165'],
                        ['1800', '1800', '1800', '1800', '1800', '1800', '1800', '1800', '1800', '1800'],
                    ],
                },
                meta: {},
            },
        },
        search4: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'sourcetype',
                        },
                        {
                            name: 'count',
                            type_special: 'count',
                        },
                        {
                            name: 'percent',
                            type_special: 'percent',
                        },
                    ],
                    columns: [
                        [
                            'splunkd',
                            'splunkd_ui_access',
                            'splunkd_access',
                            'splunk_web_access',
                            'scheduler',
                            'splunk_web_service',
                        ],
                        ['600', '525', '295', '213', '122', '19'],
                        ['87.966380', '50.381304', '60.023780', '121.183272', '70.250513', '90.194752'],
                    ],
                },
                meta: {},
            },
            name: 'search4',
        },
        search7: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'method',
                            groupby_rank: '0',
                        },
                        {
                            name: 'status',
                            groupby_rank: '1',
                        },
                        {
                            name: 'date_hour',
                            groupby_rank: '0',
                        },
                        {
                            name: 'count',
                        },
                        {
                            name: 'mode(status)',
                        },
                    ],
                    columns: [
                        [
                            'DELETE',
                            'GET',
                            'GET',
                            'POST',
                            'POST',
                            'POST',
                            'DELETE',
                            'POST',
                            'POST',
                            'POST',
                            'POST',
                            'POST',
                            'DELETE',
                            'DELETE',
                            'POST',
                            'GET',
                        ],
                        [
                            '401',
                            '201',
                            '401',
                            '201',
                            '401',
                            '201',
                            '201',
                            '401',
                            '201',
                            '201',
                            '201',
                            '200',
                            '201',
                            '201',
                            '404',
                            '401',
                        ],
                        [
                            '13',
                            '14',
                            '15',
                            '16',
                            '17',
                            '18',
                            '19',
                            '10',
                            '20',
                            '21',
                            '22',
                            '23',
                            '3',
                            '4',
                            '5',
                        ],
                        [
                            '1109',
                            '1108',
                            '1098',
                            '1088',
                            '1097',
                            '1086',
                            '1107',
                            '1090',
                            '1150',
                            '2100',
                            '1070',
                            '1097',
                            '1096',
                            '1107',
                            '1152',
                        ],
                        [
                            '401',
                            '201',
                            '401',
                            '201',
                            '401',
                            '201',
                            '201',
                            '401',
                            '201',
                            '404',
                            '201',
                            '200',
                            '201',
                            '201',
                            '404',
                            '401',
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
            options: {
                items: [
                    {
                        label: 'None',
                        value: 'none',
                    },
                    {
                        label: 'Heat Map',
                        value: 'heatmap',
                    },
                    {
                        label: 'High Low',
                        value: 'highlow',
                    },
                ],
                defaultValue: 'heatmap',
                token: 'vizOverlay',
            },
            title: 'Dropdown Input',
        },
    },
    layout: {
        type: 'absolute',
        options: {
            height: 1600,
            width: 2000,
            backgroundColor: '#708794',
            display: 'auto-scale',
        },
        globalInputs: ['input1'],
        structure: [
            {
                item: 'viz_oW1DFpN4',
                type: 'block',
                position: {
                    x: 40,
                    y: 170,
                    w: 610,
                    h: 380,
                },
            },
            {
                item: 'viz_Fx3n0Ryb',
                type: 'block',
                position: {
                    x: 40,
                    y: 570,
                    w: 610,
                    h: 480,
                },
            },
            {
                item: 'viz_rlZig9jt',
                type: 'block',
                position: {
                    x: 40,
                    y: 1070,
                    w: 610,
                    h: 440,
                },
            },
            {
                item: 'viz_lkNu67ZT',
                type: 'block',
                position: {
                    x: 690,
                    y: 170,
                    w: 610,
                    h: 380,
                },
            },
            {
                item: 'viz_VadW0za4',
                type: 'block',
                position: {
                    x: 1340,
                    y: 170,
                    w: 610,
                    h: 380,
                },
            },
            {
                item: 'viz_1cid4qzH',
                type: 'block',
                position: {
                    x: 690,
                    y: 1070,
                    w: 610,
                    h: 440,
                },
            },
            {
                item: 'viz_0GpGxyGL',
                type: 'block',
                position: {
                    x: 1340,
                    y: 1070,
                    w: 610,
                    h: 440,
                },
            },
            {
                item: 'viz_U1tPGupr',
                type: 'block',
                position: {
                    x: 690,
                    y: 570,
                    w: 610,
                    h: 480,
                },
            },
            {
                item: 'viz_Y2K9IPX1',
                type: 'block',
                position: {
                    x: 1330,
                    y: 530,
                    w: 610,
                    h: 480,
                },
            },
            {
                item: 'viz_sn0IH59g',
                type: 'block',
                position: {
                    x: 14,
                    y: 40,
                    w: 1970,
                    h: 100,
                },
            },
        ],
    },
    title: 'New Sample Viz',
    description: ' ',
};
