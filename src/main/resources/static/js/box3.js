var myChart3 = echarts.init(document.getElementById("box3"));

myChart3.showLoading();    //数据加载完之前先显示一段简单的loading动画

var actions = []
var actionRoles = []
var adventures = []
var businesss = []
var cars = []
var chesss = []
var combats = []
var firstPersonShootings = []
var leisures = []
var musics = []
var onlines = []
var realTimes = []
var roles = []
var saleTimess = []
var shootings = []
var simulators = []
var sportss = []
var strategys = []
var thirdPersonShootings = []
var toDevelops = []
    
$.ajax({
    async: true,            //异步请求
    data: {},
    //请求方式get
    type: "GET",
    //请求地址
    url: "/line/line",
    //数据，json字符串
    dataType: "json",
    //请求成功
    success: function (result) {
        // console.log("====result：=====")
        // console.log(result);
        
        for (var i = 0; i < result.length; i++) {
            actions.push(result[i].action);
            actionRoles.push(result[i].actionRole);
            adventures.push(result[i].adventure);
            businesss.push(result[i].business);
            cars.push(result[i].car);
            chesss.push(result[i].chess);
            combats.push(result[i].combat);
            firstPersonShootings.push(result[i].firstPersonShooting);
            leisures.push(result[i].leisure);
            musics.push(result[i].music);
            onlines.push(result[i].online);
            realTimes.push(result[i].realTime);
            roles.push(result[i].role);
            saleTimess.push(result[i].saleTimes);
            shootings.push(result[i].shooting);
            simulators.push(result[i].simulator);
            sportss.push(result[i].sports);
            strategys.push(result[i].strategy);
            thirdPersonShootings.push(result[i].thirdPersonShooting);
            toDevelops.push(result[i].toDevelop);
        };

        myChart3.hideLoading();    //隐藏加载动画
        
        // console.log(saleTimess)
        
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // orient: 'vertical',
                // left: 0,
                // top: 0,
                textStyle:{
                    color:'rgb(255,255,255,0.9)'
                },
                data: ['action','actionRole','adventure','business','car','chess','combat','firstPersonShooting','leisure','music','online','realTime','role','shooting','simulator','sports','strategy','thirdPersonShooting','toDevelop']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: saleTimess,
                axisLine: {
                    lineStyle: {
                        color: '#0087ED',
                        width: 1,//这里是为了突出显示加上的  
                    }
                },
                splitLine:{
                    show: true,
                    lineStyle:{
                        color: '#0087ED',
                        type: 'dashed'
                    },
                    name: '年'
                }
            },
            
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#0087ED',
                        width: 1,//这里是为了突出显示加上的  
                    }
                }
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
                        var colorList = ['#00FFFF', '#00FF00', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463','#6495ed','#ff69b4'];
                        return colorList[params.dataIndex]
                    }
                }
            },
            series: [
                {
                    name: 'action',
                    type: 'line',
                    stack: 'Total',
                    data: actions
                },
                {
                    name: 'actionRole',
                    type: 'line',
                    stack: 'Total',
                    data: actionRoles
                },
                {
                    name: 'adventure',
                    type: 'line',
                    stack: 'Total',
                    data: adventures
                },
                {
                    name: 'business',
                    type: 'line',
                    stack: 'Total',
                    data: businesss
                },
                {
                    name: 'cars',
                    type: 'line',
                    stack: 'Total',
                    data: cars
                },
                {
                    name: 'chess',
                    type: 'line',
                    stack: 'Total',
                    data: chesss
                },
                {
                    name: 'combat',
                    type: 'line',
                    stack: 'Total',
                    data: combats
                },
                {
                    name: 'firstPersonShooting',
                    type: 'line',
                    stack: 'Total',
                    data: firstPersonShootings
                },
                {
                    name: 'leisure',
                    type: 'line',
                    stack: 'Total',
                    data: leisures
                },
                {
                    name: 'music',
                    type: 'line',
                    stack: 'Total',
                    data: musics
                },
                {
                    name: 'online',
                    type: 'line',
                    stack: 'Total',
                    data: onlines
                },
                {
                    name: 'realTime',
                    type: 'line',
                    stack: 'Total',
                    data: realTimes
                },
                {
                    name: 'role',
                    type: 'line',
                    stack: 'Total',
                    data: roles
                },
                {
                    name: 'shooting',
                    type: 'line',
                    stack: 'Total',
                    data: shootings
                },
                {
                    name: 'simulator',
                    type: 'line',
                    stack: 'Total',
                    data: simulators
                },
                {
                    name: 'sports',
                    type: 'line',
                    stack: 'Total',
                    data: sportss
                },
                {
                    name: 'strategy',
                    type: 'line',
                    stack: 'Total',
                    data: strategys
                },
                {
                    name: 'thirdPersonShooting',
                    type: 'line',
                    stack: 'Total',
                    data: thirdPersonShootings
                },
                {
                    name: 'toDevelop',
                    type: 'line',
                    stack: 'Total',
                    data: toDevelops
                }
            ]
        };
        myChart3.setOption(option);
    },
    error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart3.hideLoading();
    }
});

