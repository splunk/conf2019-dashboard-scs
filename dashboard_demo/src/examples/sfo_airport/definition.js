import { createStaticURL } from '@splunk/splunk-utils/url';

const bgUrl = createStaticURL('app/dashboard_conf19_examples/sfo_airport/sfo_airport_background.svg');

export default {
    dataSources: {
        search1: {
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
                    columns: [
                        ['10', '20', '30', '43', '34', '60', '70', '85', '90'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
        search2: {
            name: 'search2',
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
                        ['15', '25', '35', '45', '35', '65', '75', '85', '75'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
        search3: {
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
                    columns: [
                        ['55', '45', '45', '65', '25', '55', '77', '75', '68'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
        search4: {
            name: 'search4',
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
                        ['20', '23', '27', '31', '17', '8', '15', '19', '24'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
        search5: {
            name: 'search5',
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
                        ['17', '14', '9', '7', '13', '21', '23', '18', '9'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
        search6: {
            name: 'search6',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'sourcetype',
                        },
                        {
                            name: 'percent',
                            type_special: 'percent',
                        },
                    ],
                    columns: [
                        ['Early', 'On Time', 'Delayed', 'Significantly Delayed', 'Cancelled'],
                        ['17', '163', '79', '41', '8'],
                    ],
                },
                meta: {},
            },
        },
        search7: {
            name: 'search7',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Scheduled',
                        },
                        {
                            name: 'Destinations',
                        },
                        {
                            name: 'Flight Number',
                        },
                        {
                            name: 'Status',
                        },
                    ],
                    columns: [
                        ['11:55', '11:57', '12:02', '12:04', '12:07', '12:11'],
                        ['Tokyo', 'Los Angeles', 'New York', 'Vancouver', 'Shanghai', 'Mexico City'],
                        ['UA 34', 'NK 77', 'AA 31', 'AC 92', 'AC 42', 'UA 31'],
                        ['Departed', 'On Time', 'Delayed', 'On Time', 'on Time', 'Cancelled'],
                    ],
                },
                meta: {},
            },
        },
        search8: {
            name: 'search8',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Scheduled',
                        },
                        {
                            name: 'Via',
                        },
                        {
                            name: 'Flight Number',
                        },
                        {
                            name: 'Status',
                        },
                    ],
                    columns: [
                        ['11:56', '11:59', '12:01', '12:08', '12:11', '12:13'],
                        ['Hong Kong', 'Seattle', 'New York', 'Toronto', 'Austin', 'Boston'],
                        ['NK 65', 'AA 06', 'UA 82', 'AA 31', 'AC 18', 'UA 79'],
                        ['Arrived', 'Delayed', 'Delayed', 'On Time', 'Cancelled', 'On Time'],
                    ],
                },
                meta: {},
            },
        },
        search9: {
            name: 'search9',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Pos',
                        },
                        {
                            name: 'Flight Number',
                        },
                    ],
                    columns: [['1', '2'], ['NK 65', 'AA 06']],
                },
                meta: {},
            },
        },
        search10: {
            name: 'search10',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Pos',
                        },
                        {
                            name: 'Flight Number',
                        },
                    ],
                    columns: [['1', '2', '3', '4'], ['NC 41', 'NP 27', 'AA 98', 'UA 67']],
                },
                meta: {},
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            width: 1920,
            height: 1080,
            display: 'auto-scale',
            backgroundImage: {
                src: bgUrl,
                x: 250,
                y: 90,
                w: 1110,
                h: 750,
            },
        },
        structure: [
            {
                item: 'viz_zdomPpDE',
                type: 'line',
                position: {
                    to: {
                        x: 522,
                        y: 1015,
                    },
                    from: {
                        x: 250,
                        y: 1016,
                    },
                },
            },
            {
                item: 'viz_QXHn2jqv',
                type: 'line',
                position: {
                    to: {
                        item: 'viz_yWhyQpnw',
                        port: 's',
                    },
                    from: {
                        x: 523,
                        y: 1016,
                    },
                },
            },
            {
                item: 'viz_B6g2pTV6',
                type: 'line',
                position: {
                    to: {
                        x: 634,
                        y: 875,
                    },
                    from: {
                        x: 251,
                        y: 876,
                    },
                },
            },
            {
                item: 'viz_Ix2Uka3D',
                type: 'line',
                position: {
                    to: {
                        x: 633,
                        y: 875,
                    },
                    from: {
                        item: 'viz_btccDU9N',
                        port: 's',
                    },
                },
            },
            {
                item: 'viz_vObbtrru',
                type: 'line',
                position: {
                    to: {
                        x: 761,
                        y: 733,
                    },
                    from: {
                        x: 251,
                        y: 734,
                    },
                },
            },
            {
                item: 'viz_jfU00Ext',
                type: 'line',
                position: {
                    to: {
                        x: 781,
                        y: 754,
                    },
                    from: {
                        x: 271,
                        y: 755,
                    },
                },
            },
            {
                item: 'viz_8hIKDn7X',
                type: 'line',
                position: {
                    to: {
                        item: 'viz_7W8Okvnm',
                        port: 's',
                    },
                    from: {
                        x: 762,
                        y: 734,
                    },
                },
            },
            {
                item: 'viz_5RRCzhnd',
                type: 'line',
                position: {
                    to: {
                        x: 780,
                        y: 593,
                    },
                    from: {
                        x: 247,
                        y: 594,
                    },
                },
            },
            {
                item: 'viz_HqyJgRL3',
                type: 'line',
                position: {
                    to: {
                        x: 780,
                        y: 460,
                    },
                    from: {
                        x: 780,
                        y: 592,
                    },
                },
            },
            {
                item: 'viz_3tbeFWP6',
                type: 'line',
                position: {
                    to: {
                        x: 689,
                        y: 454,
                    },
                    from: {
                        x: 250,
                        y: 456,
                    },
                },
            },
            {
                item: 'viz_T5sqo1jo',
                type: 'line',
                position: {
                    to: {
                        x: 689,
                        y: 455,
                    },
                    from: {
                        x: 689,
                        y: 420,
                    },
                },
            },
            {
                item: 'viz_HweCo1wi',
                type: 'line',
                position: {
                    to: {
                        x: 540,
                        y: 316,
                    },
                    from: {
                        x: 250,
                        y: 316,
                    },
                },
            },
            {
                item: 'viz_pWqT24eU',
                type: 'line',
                position: {
                    to: {
                        item: 'viz_hvFO1nat',
                        port: 'n',
                    },
                    from: {
                        x: 540,
                        y: 316,
                    },
                },
            },
            {
                item: 'viz_yKtZyNoe',
                type: 'line',
                position: {
                    to: {
                        x: 468,
                        y: 175,
                    },
                    from: {
                        x: 249,
                        y: 174,
                    },
                },
            },
            {
                item: 'viz_A8CmRgpO',
                type: 'line',
                position: {
                    to: {
                        x: 470,
                        y: 411,
                    },
                    from: {
                        x: 469,
                        y: 175,
                    },
                },
            },
            {
                item: 'viz_JEgEKxDs',
                type: 'line',
                position: {
                    to: {
                        item: 'viz_IcQ9hvDS',
                        port: 's',
                    },
                    from: {
                        x: 765,
                        y: 881,
                    },
                },
            },
            {
                item: 'viz_zzLivIgY',
                type: 'line',
                position: {
                    to: {
                        x: 880,
                        y: 880,
                    },
                    from: {
                        item: 'viz_mHAxeX3s',
                        port: 'n',
                    },
                },
            },
            {
                item: 'viz_rdB9C0aB',
                type: 'line',
                position: {
                    to: {
                        x: 765,
                        y: 881,
                    },
                    from: {
                        x: 880,
                        y: 881,
                    },
                },
            },
            {
                item: 'viz_BxfTEbl1',
                type: 'line',
                position: {
                    to: {
                        x: 1391,
                        y: 975,
                    },
                    from: {
                        item: 'viz_G1Kxg3SN',
                        port: 'e',
                    },
                },
            },
            {
                item: 'viz_LoqfoyKG',
                type: 'line',
                position: {
                    to: {
                        x: 1389,
                        y: 597,
                    },
                    from: {
                        x: 1391,
                        y: 975,
                    },
                },
            },
            {
                item: 'viz_Enmps0j1',
                type: 'line',
                position: {
                    to: {
                        x: 1390,
                        y: 597,
                    },
                    from: {
                        item: 'viz_Jb0f6fcL',
                        port: 'e',
                    },
                },
            },
            {
                item: 'viz_udKqbB9W',
                type: 'block',
                position: {
                    h: 780,
                    w: 1310,
                    x: 170,
                    y: 70,
                },
            },
            {
                item: 'viz_7W8Okvnm',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 730,
                    y: 540,
                },
            },
            {
                item: 'viz_cP924byK',
                type: 'block',
                position: {
                    h: 1070,
                    w: 520,
                    x: 1400,
                    y: 0,
                },
            },
            {
                item: 'viz_45Ssfd7d',
                type: 'block',
                position: {
                    h: 50,
                    w: 420,
                    x: 30,
                    y: 10,
                },
            },
            {
                item: 'viz_6ZVYp6xh',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 80,
                },
            },
            {
                item: 'viz_SeqNpVdX',
                type: 'block',
                position: {
                    h: 110,
                    w: 320,
                    x: 1060,
                    y: 920,
                },
            },
            {
                item: 'viz_w5nBs4sV',
                type: 'block',
                position: {
                    h: 110,
                    w: 320,
                    x: 720,
                    y: 920,
                },
            },
            {
                item: 'viz_UQJmtqF4',
                type: 'block',
                position: {
                    h: 310,
                    w: 520,
                    x: 1400,
                    y: 130,
                },
            },
            {
                item: 'viz_hc2XMqUK',
                type: 'block',
                position: {
                    h: 340,
                    w: 520,
                    x: 1400,
                    y: 730,
                },
            },
            {
                item: 'viz_tG7jZdu1',
                type: 'block',
                position: {
                    h: 330,
                    w: 520,
                    x: 1400,
                    y: 410,
                },
            },
            {
                item: 'viz_TOV3uNUK',
                type: 'block',
                position: {
                    h: 80,
                    w: 360,
                    x: 1400,
                    y: 20,
                },
            },
            {
                item: 'viz_uXhDbLTo',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 80,
                },
            },
            {
                item: 'viz_FTezu9ZA',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 220,
                },
            },
            {
                item: 'viz_5Jf16R5t',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 220,
                },
            },
            {
                item: 'viz_y2mJ3i3L',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 360,
                },
            },
            {
                item: 'viz_MACibKQF',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 360,
                },
            },
            {
                item: 'viz_uOh1TY45',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 500,
                },
            },
            {
                item: 'viz_MtCafMBQ',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 500,
                },
            },
            {
                item: 'viz_3ozzMeuq',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 640,
                },
            },
            {
                item: 'viz_yu7DnsGt',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 640,
                },
            },
            {
                item: 'viz_9GqVVQQH',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 780,
                },
            },
            {
                item: 'viz_BIdFtb1z',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 780,
                },
            },
            {
                item: 'viz_NOG0Ac2W',
                type: 'block',
                position: {
                    h: 130,
                    w: 220,
                    x: 30,
                    y: 920,
                },
            },
            {
                item: 'viz_m9gEzteU',
                type: 'block',
                position: {
                    h: 120,
                    w: 230,
                    x: 40,
                    y: 920,
                },
            },
            {
                item: 'viz_yWhyQpnw',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 490,
                    y: 660,
                },
            },
            {
                item: 'viz_TDQ94Oh9',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 510,
                    y: 660,
                },
            },
            {
                item: 'viz_btccDU9N',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 600,
                    y: 630,
                },
            },
            {
                item: 'viz_6hSouuAX',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 620,
                    y: 630,
                },
            },
            {
                item: 'viz_6u8f8pal',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 750,
                    y: 540,
                },
            },
            {
                item: 'viz_mOvVms7x',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 750,
                    y: 430,
                },
            },
            {
                item: 'viz_Ut605eEQ',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 770,
                    y: 430,
                },
            },
            {
                item: 'viz_Ttq8tUl5',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 660,
                    y: 360,
                },
            },
            {
                item: 'viz_vpxtc5ls',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 680,
                    y: 360,
                },
            },
            {
                item: 'viz_xr2k4iLw',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 510,
                    y: 330,
                },
            },
            {
                item: 'viz_hvFO1nat',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 530,
                    y: 330,
                },
            },
            {
                item: 'viz_LutpSszt',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 440,
                    y: 410,
                },
            },
            {
                item: 'viz_KCH6KZAs',
                type: 'block',
                position: {
                    h: 50,
                    w: 20,
                    x: 460,
                    y: 410,
                },
            },
            {
                item: 'viz_IX1zXLix',
                type: 'block',
                position: {
                    h: 40,
                    w: 100,
                    x: 720,
                    y: 800,
                },
            },
            {
                item: 'viz_mHAxeX3s',
                type: 'block',
                position: {
                    h: 110,
                    w: 320,
                    x: 720,
                    y: 920,
                },
            },
            {
                item: 'viz_IcQ9hvDS',
                type: 'block',
                position: {
                    h: 50,
                    w: 50,
                    x: 740,
                    y: 790,
                },
            },
            {
                item: 'viz_ZOC6Gccs',
                type: 'block',
                position: {
                    h: 40,
                    w: 100,
                    x: 1240,
                    y: 580,
                },
            },
            {
                item: 'viz_G1Kxg3SN',
                type: 'block',
                position: {
                    h: 110,
                    w: 320,
                    x: 1060,
                    y: 920,
                },
            },
            {
                item: 'viz_Jb0f6fcL',
                type: 'block',
                position: {
                    h: 50,
                    w: 50,
                    x: 1260,
                    y: 570,
                },
            },
        ],
    },
    title: 'San Francisco Airport Dashboard',
    description: '',
    visualizations: {
        viz_3ozzMeuq: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#F6847C',
            },
        },
        viz_3tbeFWP6: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FCD9A3',
            },
        },
        viz_45Ssfd7d: {
            type: 'viz.text',
            options: {
                color: '#ffffff',
                content: 'Metrics & Analytics',
                fontSize: 44,
            },
        },
        viz_5Jf16R5t: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate F',
        },
        viz_5RRCzhnd: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FDAF93',
            },
        },
        viz_6ZVYp6xh: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate G',
        },
        viz_6hSouuAX: {
            type: 'viz.text',
            options: {
                content: 'B',
            },
        },
        viz_6u8f8pal: {
            type: 'viz.text',
            options: {
                content: 'C',
            },
        },
        viz_7W8Okvnm: {
            type: 'viz.ellipse',
            options: {
                fill: '#F6847C',
                stroke: '#F6847C',
            },
        },
        viz_8hIKDn7X: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#F6847C',
            },
        },
        viz_9GqVVQQH: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#C6335F',
            },
        },
        viz_A8CmRgpO: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#A2793C',
            },
        },
        viz_B6g2pTV6: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#C6335F',
            },
        },
        viz_BIdFtb1z: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate B',
        },
        viz_BxfTEbl1: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#E85B79',
            },
        },
        viz_Enmps0j1: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#E85B79',
            },
        },
        viz_FTezu9ZA: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#DAB068',
            },
        },
        viz_G1Kxg3SN: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#E85B79',
                strokeWidth: 2,
            },
        },
        viz_HqyJgRL3: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FDAF93',
            },
        },
        viz_HweCo1wi: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#DAB068',
            },
        },
        viz_IX1zXLix: {
            type: 'viz.rectangle',
            options: {
                rx: 4,
                ry: 4,
                fill: '#FCB4B0',
                stroke: '#FCB4B0',
            },
        },
        viz_IcQ9hvDS: {
            type: 'viz.text',
            options: {
                content: '01R',
            },
        },
        viz_Ix2Uka3D: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#C6335F',
            },
        },
        viz_JEgEKxDs: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FCB4B0',
            },
        },
        viz_Jb0f6fcL: {
            type: 'viz.text',
            options: {
                content: '28R',
            },
        },
        viz_KCH6KZAs: {
            type: 'viz.text',
            options: {
                color: '#ffffff',
                content: 'G',
            },
        },
        viz_LoqfoyKG: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#E85B79',
            },
        },
        viz_LutpSszt: {
            type: 'viz.ellipse',
            options: {
                fill: '#DAB068',
                stroke: '#DAB068',
            },
        },
        viz_MACibKQF: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate E',
        },
        viz_MtCafMBQ: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate D',
        },
        viz_NOG0Ac2W: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#7F2687',
            },
        },
        viz_QXHn2jqv: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#7F2687',
            },
        },
        viz_SeqNpVdX: {
            type: 'viz.singlevalue',
            title: 'Take Off Queue Time',
            options: {
                backgroundColor: '#f1813f',
                sparklinePosition: 'before',
                showTrendIndicator: true,
            },
            encoding: {
                fill: {
                    field: 'primary[0]',
                    format: {
                        type: 'rangevalue',
                        ranges: [
                            {
                                from: 25,
                                value: '#dc4e41',
                            },
                            {
                                to: 25,
                                from: 20,
                                value: '#f1813f',
                            },
                            {
                                to: 20,
                                from: 15,
                                value: '#f8be34',
                            },
                            {
                                to: 15,
                                from: 10,
                                value: '#4beba8',
                            },
                            {
                                to: 10,
                                value: '#53a051',
                            },
                        ],
                    },
                },
            },
            dataSources: {
                primary: 'search4',
            },
            description: 'Runway 10L/28R',
        },
        viz_T5sqo1jo: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FCD9A3',
            },
        },
        viz_TDQ94Oh9: {
            type: 'viz.text',
            options: {
                content: 'A',
            },
        },
        viz_TOV3uNUK: {
            type: 'viz.img',
            options: {
                src: 'https://i.ibb.co/Qj1z2Fs/sfo-logo.png',
                preserveAspectRatio: true,
            },
        },
        viz_Ttq8tUl5: {
            type: 'viz.ellipse',
            options: {
                fill: '#FCD9A3',
                stroke: '#FCD9A3',
            },
        },
        viz_UQJmtqF4: {
            type: 'viz.pie',
            title: 'On Time Performance Summary',
            options: {
                fontColor: '#fcfcfc',
                seriesColors: '[#88358f,#c6335f,#f6847c,#fcd9a3,#dab068]',
                backgroundColor: 'transparent',
                'chart.showLabels': true,
                'chart.showPercent': true,
                'chart.sliceCollapsingLabel': 'All Others',
                'chart.sliceCollapsingThreshold': 0.01,
            },
            dataSources: {
                primary: 'search6',
            },
        },
        viz_Ut605eEQ: {
            type: 'viz.text',
            options: {
                color: '#ffffff',
                content: 'D',
            },
        },
        viz_ZOC6Gccs: {
            type: 'viz.rectangle',
            options: {
                rx: 4,
                ry: 4,
                fill: '#E85B79',
                stroke: '#E85B79',
            },
        },
        viz_btccDU9N: {
            type: 'viz.ellipse',
            options: {
                fill: '#C6335F',
                stroke: '#C6335F',
            },
        },
        viz_cP924byK: {
            type: 'viz.rectangle',
            options: {
                fill: '#23242B',
                stroke: '#23242B',
            },
        },
        viz_hc2XMqUK: {
            type: 'viz.table',
            title: 'Depatures',
            options: {
                headerTextColor: '#ababab',
                rowTextColorOdd: '#C3CBD4',
                rowTextColorEven: '#C3CBD4',
                headerBackgroundColor: '#242A2E',
                rowBackgroundColorOdd: '#23242B',
                rowBackgroundColorEven: '#23242B',
            },
            dataSources: {
                primary: 'search7',
            },
            description: 'Flight Schedule',
        },
        viz_hvFO1nat: {
            type: 'viz.text',
            options: {
                color: '#ffffff',
                content: 'F',
            },
        },
        viz_jfU00Ext: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#F6847C#F6847C',
            },
        },
        viz_m9gEzteU: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate A',
        },
        viz_mHAxeX3s: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#FCB4B0',
                strokeWidth: 2,
            },
        },
        viz_mOvVms7x: {
            type: 'viz.ellipse',
            options: {
                fill: '#FDAF93',
                stroke: '#FDAF93',
            },
        },
        viz_pWqT24eU: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#DAB068',
            },
        },
        viz_rdB9C0aB: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FCB4B0',
            },
        },
        viz_tG7jZdu1: {
            type: 'viz.table',
            title: 'Arrivals',
            options: {
                rowTextColorOdd: '#C3CBD4',
                rowTextColorEven: '#C3CBD4',
                headerBackgroundColor: '#242A2E',
                rowBackgroundColorOdd: '#23242B',
                rowBackgroundColorEven: '#23242B',
            },
            dataSources: {
                primary: 'search8',
            },
            description: 'Flight Schedule',
        },
        viz_uOh1TY45: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#FDAF93',
            },
        },
        viz_uXhDbLTo: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#A2793C',
            },
        },
        viz_udKqbB9W: {
            type: 'viz.singlevalueicon',
            options: {
                icon: 'splunkx://ck0r9pn8w009u0j2622w5zn7x',
                showValue: false,
            },
        },
        viz_vObbtrru: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#F6847C',
            },
        },
        viz_vpxtc5ls: {
            type: 'viz.text',
            options: {
                color: '#ffffff',
                content: 'E',
            },
        },
        viz_w5nBs4sV: {
            type: 'viz.singlevalue',
            title: 'Take Off Queue Time',
            options: {
                backgroundColor: '#53a051',
                sparklinePosition: 'before',
                showTrendIndicator: true,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Runway 19L/01R',
        },
        viz_xr2k4iLw: {
            type: 'viz.ellipse',
            options: {
                fill: '#DAB068',
                stroke: '#DAB068',
            },
        },
        viz_y2mJ3i3L: {
            type: 'viz.rectangle',
            options: {
                fill: 'transparent',
                stroke: '#FCD9A3',
            },
        },
        viz_yKtZyNoe: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#A2793C',
            },
        },
        viz_yWhyQpnw: {
            type: 'viz.ellipse',
            options: {
                fill: '#7F2687',
                stroke: '#7F2687',
            },
        },
        viz_yu7DnsGt: {
            type: 'viz.singlevalue',
            title: 'Security Waiting Time',
            options: {
                unit: 'min',
                showSparkline: false,
                backgroundColor: 'transparent',
                showTrendIndicator: false,
            },
            dataSources: {
                primary: 'search5',
            },
            description: 'Gate C',
        },
        viz_zdomPpDE: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#7F2687',
            },
        },
        viz_zzLivIgY: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#FCB4B0',
            },
        },
    },
};
