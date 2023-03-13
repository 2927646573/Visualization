var myChart1 = echarts.init(document.getElementById("box1"));

myChart1.showLoading();    //数据加载完之前先显示一段简单的loading动画

// //声明一个对象
var list1= [];
var nus1 = [];
$.ajax({
    async: true,            //异步请求
    data: {},
    //请求方式get
    type: "GET",
    //请求地址
    url: "/developers/publishers",
    //数据，json字符串
    dataType: "json",
    //请求成功
    success: function (result){
        // console.log(result);

        // 进行数据的遍历
        $.each(result, function (index, item){
            list1.push(item.publishers);
            nus1.push({
                value: item.publishersnum,
                name: item.publishers
            });
        });

        myChart1.hideLoading();    //隐藏加载动画
        
        // console.log(list1);
        // console.log(nus1);
        
        var option = {  //指定图表的配置项和数据
            backgroundColor: 'rgba(128, 128, 128, 0.1)',  //rgba设置透明度0.1
            title: {  //配置标题组件
                text: '',
                x: 'center', y: 15,
                textStyle: {
                    color: 'green', fontSize: 22,
                }
            },
            tooltip: { show: true },  //配置提示框组件
            series: [{  //数据系列及其配置
                name: '',  //设置名称
                type: 'wordCloud',  //设置图表类型为字云图
                sizeRange: [15, 100],  //设置数据大小范围
                size: ['80%', '80%'],  //设置显示的字云图的大小
                textRotation: [0, 45, 90, 135, -45, -90],  //设置文字倾斜角度
                textPadding: 3,  //设置文字之间的间距
                autoSize: { enable: true, minSize: 5 },  //设置文字的自动大小
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 26,
                        color: '#333',
                        shadowColor: '#ccc',
                        fontSize: 20
                    }
                },
                data: nus1
            }]  //series结束
        };  //option结束
        myChart1.setOption(option);  //为echarts对象加载数据 
    },
    error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart1.hideLoading();
    }
});


