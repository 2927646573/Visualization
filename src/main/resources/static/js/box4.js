var myChart4 = echarts.init(document.getElementById("box4"));

myChart4.showLoading();    //数据加载完之前先显示一段简单的loading动画

// //声明一个对象
var list4 = [];
var nus4 = [];
$.ajax({
    async: true,            //异步请求
    data: {},
    //请求方式get
    type: "GET",
    //请求地址
    url: "/developers/types",
    //数据，json字符串
    dataType: "json",
    //请求成功
    success: function (result) {
        // console.log(result);
        // 进行数据的遍历
        // for (let i = 0; i < result.length; i++) {
        //     list.push(result[i].types)
        //     nus.push(result[i].number)
        // }

        // console.log(list);
        // console.log(nus);
        // myChart.hideLoading();    //隐藏加载动画

        // 进行数据的遍历
        $.each(result, function (index, item){
            list4.push(item.types);
            nus4.push({
                value: item.number,
                name: item.types
            });
        });

        myChart4.hideLoading();    //隐藏加载动画

        // console.log(list4);
        // console.log(nus4);

        var option = {
            title: {
                text: '',
                left: 'center'
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
                // 计算占比%
            },

            legend: {                 //旁边的小标图
                orient: 'vertical',
                right: 10,
                top: 300,
                textStyle:{
                    color:'rgb(255,255,255,0.9)'
                },
                data: list4
            },
            series: [
                {
                    name: '游戏类型',
                    type: 'pie',     // 设置图表类型为饼图
                    radius: '90%',      //饼图的半径，外半径为可视区尺寸的长度。
                    center: ['50%','50%'], //设置圆心
                    // roseType: 'angle',           //设置图表类型为南丁格尔图
                    avoidLabelOverlap: false,
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: ''
                            // color: 'rgba(200, 0, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },

                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal:{
                            color:function(params) {
                                //自定义颜色
                                var colorList = ['#00FFFF', '#00FF00', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463','#6495ed','#ff69b4','#00FFFF', '#00FF00', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463','#6495ed','#ff69b4','#BC8F8F','#CDCDCD','#DB9370','#38B0DE'];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    data: nus4
                }
            ]
        };
        myChart4.setOption(option);
    },
    error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart.hideLoading();
    }
});



