$(function () {

    $('#chart').highcharts({
        colors: ["#f7a35c"],
        chart: {
            polar: true,
            type: 'line',
            backgroundColor: null
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80,
            style: {"color": "#fff"}
        },
        subtitle: {
            style: {
                color: '#fff',
                textTransform: 'uppercase'
            }
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                'Information Technology'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },


        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical',
            itemStyle: {
                color: '#fff'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#fff'
            }
        },

        series: [{
            name: 'Allocated Budget',
            data: [10, 10, 10, 10, 5],
            pointPlacement: 'on'
        }]

    });
});