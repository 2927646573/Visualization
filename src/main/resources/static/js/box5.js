var myChart5 = echarts.init(document.getElementById("box5"));

myChart5.showLoading();    //数据加载完之前先显示一段简单的loading动画

// //声明一个对象
var list5 = [];
var nus5 = [];
$.ajax({
    async: true,            //异步请求
    data: {},
    //请求方式get
    type: "GET",
    //请求地址
    url: "/developers/points",
    //数据，json字符串
    dataType: "json",
    //请求成功
    success: function (result) {
        // 进行数据的遍历
        $.each(result, function (index, item) {
            list5.push(item.pointsnum);
            nus5.push(item.saleTimes);
        });

        myChart5.hideLoading();    //隐藏加载动画

        // console.log(list5);
        // console.log(nus5);

        var option = {
            title: {
                text: ''
            },

            legend: {
                // data: ['总数']
            },

            xAxis: {
                data: nus5,
                axisLabel: {//坐标轴刻度标签的相关设置。
                    interval: 0,
                    rotate: "45", //表示的角度倾斜45度
                    // 更改x轴文字颜色的配置
                    textStyle: {
                        color: 'white',//处理x轴的文字颜色【粉色】
                    }
                },
                // 更改x轴线的颜色
                axisLine: {
                    lineStyle: {
                        color: '#d9d9d9',
                    }
                }
            },

            yAxis: {
                axisLabel: {//y轴文字的配置
                    textStyle: {
                        color: "rgba(138, 144, 163, 1)",//Y轴内容文字颜色
                    },
                },
                axisLine: {//y轴线的配置
                    show: true,//是否展示
                    lineStyle: {
                        color: "#ECEDF0",//y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）
                        width: 1,//y轴线的宽度
                        type: "solid"//y轴线为实线
                    },
                }
            },
            
            series: [{
                // name: '总数',
                type: 'bar',
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        color: function (params) {
                            //自定义颜色
                            var colorList = ['#00FFFF', '#00FF00', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463', '#6495ed', '#ff69b4', '#00FFFF', '#00FF00', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463', '#6495ed', '#ff69b4'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: list5
            }]
        };  //option结束
        myChart5.setOption(option);  //为echarts对象加载数据 
    },
    error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart5.hideLoading();
    }
});


