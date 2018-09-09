
var lists=new Vue({
    el:'#form',
    data:{
        lists:[{ title: 39,
            alert:[{v:223,float:6,float_max:7,},
                {v:231,float:6,float_max:8,}, {v:219,float:6,float_max:7,},{v:231,float:6,float_max:8,},],
            fuhe:{ss:332,qt:221,f:49.91,t_max:633.9,t_min:49.91,t_1:'19:20',t_2:'01:50',y_max:633.6,y_min:50,y_1:'19:11',y_2:'02:05'},
            line:[{name:'办公楼照明',data:310,ed:410},{name:'办公楼插座',data:420,ed:410},{name:'办公楼照明',data:310,ed:410},{name:'办公楼照明',data:410,ed:410},{name:'办公楼照明',data:410,ed:410},{name:'办公楼照明',data:410,ed:410},{name:'办公楼照明',data:410,ed:410},{name:'办公楼照明',data:410,ed:410}],
            byq:[{name:'办公楼照明',data:310,ed:410},{name:'办公楼插座',data:420,ed:410},{name:'办公楼照明',data:310,ed:410}],
            state:[{date:'7月1号',line:'线路2',content:'升级DIU设备',st:'02:00',ct:'12:00',bz:'完成',},
                {date:'7月1号',line:'线路2',content:'升级DIU设备',st:'02:00',ct:'12:00',bz:'完成',},
                {date:'7月1号',line:'线路2',content:'升级DIU设备',st:'02:00',ct:'12:00',bz:'完成',},
                {date:'7月1号',line:'线路2',content:'升级DIU设备',st:'02:00',ct:'12:00',bz:'完成',},
                {date:'7月1号',line:'线路2',content:'升级DIU设备',st:'02:00',ct:'12:00',bz:'完成',},
                {date:'7月1号',line:'线路2',content:'升级DIU设备',st:'02:00',ct:'12:00',bz:'完成',},]
        }]

    },


});

prodata();
function prodata () {

    for(var i=0;i<lists.lists[0].line.length;i++){
        var d1=lists.lists[0].line[i].data;
        var de=lists.lists[0].line[i].ed;
        var scale=d1/de;
        if(scale<1){
            d1=scale*460;
            de=460-d1;

        }else if(scale==1){
            $("#fz"+i  ).css("fill",'url(#grad2)')
            d1=460;
            de=5;
        } else {
            $("#fz"+i ).css("fill",'url(#grad3)')
            d1=460;
            de=5;
        }
        $("#ft"+i ).attr("y",de+30)
        $("#fz"+i ).attr("y",de)
        $("#fz"+i ).attr("height",d1)
        console.log(d1)

    }
    for(var i=0;i<lists.lists[0].byq.length;i++){
        var d1=lists.lists[0].byq[i].data;
        var de=lists.lists[0].byq[i].ed;
        var scale=d1/de;
        if(scale<1){
            d1=scale*460;
            de=460-d1;

        }else if(scale==1){
            $("#fb"+i  ).css("fill",'url(#grad2)')
            d1=460;
            de=5;
        } else {
            $("#fb"+i ).css("fill",'url(#grad3)')
            d1=460;
            de=5;
        }
        $("#fby"+i ).attr("y",de+30)
        $("#fb"+i ).attr("y",de)
        $("#fb"+i ).attr("height",d1)
        console.log(d1)

    }

}

var swiper = new Swiper('.fz-bott', {
    noSwiping : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 300000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    pagination: {
        el: '#tab-table',
        bulletActiveClass: 'energy-bullet-active',
        bulletClass: 'energy-bullet',
        clickable: true,
        renderBullet: function (index, className) {

            var title = "";
            if (index == 0) {
                title = "线路";
            } else if (index == 1) {
                title = "变压器";
            }
            return '<span class="' + className + "" + '">' + title + '</span>';
        }
    },
    disableOnInteraction: false,
    direction: 'horizontal'
});
var swiper2 = new Swiper('.fz-1',{

    noSwiping : false,
    slidesPerView: 6,
    disableOnInteraction: false,
    direction: 'horizontal',
   /* watchSlidesProgress : true,
    watchSlidesVisibility : true,
    slideVisibleClass : 'my-slide-visible',*/
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,

    },
})

/*var tab = new auiTab({
    element:document.getElementById("tab-table"),
    index:1,
    repeatClick:false
},function(ret){
    console.log(ret.index)

});*/

var myChart = echarts.init(document.getElementById('chart1'));
var option1 = {
    title: {
        padding: 0,
        text: '',
        subtext: ''
    },
    grid: {
        left:'15%',
        right:'15%',
    },
    legend:{
        textStyle:{
            fontSize:30,
            color:'white'
        },

    },
    tooltip: {
        show:true,
        trigger: 'axis',
        textStyle:{
            fontSize:30,
        },
    },
    toolbox: {
        show: true,

    },
    xAxis: {
        data:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        name: '时间',
        type: 'category',
        boundaryGap: true,
        axisLine:{
            lineStyle:{color:'white'}
        },
        axisLabel:{
            fontSize: 30,
        },
        nameTextStyle:{
            fontSize: 20
        }

    },
    yAxis: {
        nameTextStyle: {
            align: "left",
            fontSize: 20
        },
        name: "负荷(kW)",
        type: 'value',


        axisLabel: {
            formatter: '{value}',
            fontSize: 30,
        },
        axisLine:{
            lineStyle:{color:'white'}
        },
        axisPointer: {
            snap: true
        }
    },

    series: [{
        showSymbol:false,
        name: '今日',
        type: 'line',
        smooth: true,
        data:[223,158,332,224,321,333,332,321,361,342,354,396],
        lineStyle:{
            color:'red',
        }
    },{
        showSymbol:false,
        name: '昨日',
        type: 'line',
        smooth: true,
        data:[223,158,232,224,221,233,232,221,261,242,254,296],
        lineStyle:{
            color:'white',
        }
    }]
};
myChart.setOption(option1);
