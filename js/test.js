
function initTime(Time){
    Time.months=getMonths(Time.currentTime.month);
    Time.days=getdays(Time.currentTime.year,Time.currentTime.month,Time.currentTime.day);
    Time.weeks=getWeeks(Time.currentTime.week);
    Time.hours=getHours(Time.currentTime.hour);
    Time.minutes=getMinutes(Time.currentTime.minute);
    Time.seconds=getSeconds(Time.currentTime.second);
    Time.currentTime.week=Time.weekUnit+ getWeek(Time.currentTime.week);

}


$(document).ready(function () {

    var style = document.styleSheets[0];
    var $body=$('body');
    var $year=$(".main-content .year");
    var $month=$(".main-content .month");
    var $day=$(".main-content .day");
    var $week=$(".main-content .week");
    var $hour=$(".main-content .hour");
    var $minute=$(".main-content .minute");
    var $second=$(".main-content .second");

    var monthLeft=$month.css("left");
    var dayLeft=$day.css("left");
    var weekLeft=$week.css("left");
    var hourLeft=$hour.css("left");
    var minuteLeft=$minute.css("left");
    var secondLeft=$second.css("left");
    var top=$month.css("top");
    var yearLeft=$(".main-content .year span").width()/2;
    var weeklock=["星期天","星期一","星期二","星期三","星期四","星期五","星期六","星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
    var tip=1;

    //当前日期时间
    var Time={
        currentTime:{
            year:1970,
            month:1,
            day:1,
            hour:0,
            minute:0,
            second:0,
            week:0,
        },
        months:[],
        days:[],
        hours:[],
        minutes:[],
        seconds:[],
        weeks:[],

        yearUnit:"年",
        monthUnit:"月",
        dayUnit:"日",
        weekUnit:"星期",
        hourUnit:"时",
        minuteUnit:"分",
        secondUnit:"秒"
        
    }
    initTime(Time);


    $year.append("<span class='current'>"+Time.currentTime.year+Time.yearUnit+"</span>");
    $month.append("<span class='current'>"+Time.currentTime.month+Time.monthUnit+"</span>");
    $day.append("<span class='current'>"+Time.currentTime.day+Time.dayUnit+"</span>");
    $week.append("<span class='current'>"+Time.currentTime.week+"</span>");

    $hour.append("<span class='current'>"+Time.currentTime.hour+Time.hourUnit+"</span>");
    $minute.append("<span class='current'>"+Time.currentTime.minute+Time.minuteUnit+"</span>");
    $second.append("<span class='current'>"+Time.currentTime.second+Time.secondUnit+"</span>");

    var h=$(".year span").height();
    top=-(parseInt(top))-parseInt(h)/2;
    top+="px";

    for (const key in Time.months) {
        if (Time.months.hasOwnProperty(key)) {
            const element = Time.months[key];
            if(element!==Time.currentTime.month){
                $(".main-content .month").append("<span>"+element+Time.monthUnit+"</span>");
            }
        }
    }
    for (const key in Time.days) {
        if (Time.days.hasOwnProperty(key)) {
            const element = Time.days[key];
            if(element!==Time.currentTime.day){
                $(".main-content .day").append("<span>"+element+Time.dayUnit+"</span>");
            }
        }
    }
    for (const key in Time.weeks) {
        if (Time.weeks.hasOwnProperty(key)) {
            const element = Time.weeks[key];
            if(element!==Time.currentTime.week){
                $(".main-content .week").append("<span>"+element+"</span>");
            }
        }
    }

    for (const key in Time.hours) {
        if (Time.hours.hasOwnProperty(key)) {
            const element = Time.hours[key];
            if(element!==Time.currentTime.hour){
                $(".main-content .hour").append("<span>"+element+Time.hourUnit+"</span>");
            }
        }
    }

    for (const key in Time.minutes) {
        if (Time.minutes.hasOwnProperty(key)) {
            const element = Time.minutes[key];
            if(element!==Time.currentTime.minute){
                $(".main-content .minute").append("<span>"+element+Time.minuteUnit+"</span>");
            }
        }
    }
    for (const key in Time.seconds) {
        if (Time.seconds.hasOwnProperty(key)) {
            const element = Time.seconds[key];
            if(element!==Time.currentTime.second){
                $(".main-content .second").append("<span>"+element+Time.secondUnit+"</span>");
            }
        }
    }


    setTimeout(function () {
        $(".month span").each(function(index,element){
            $(element).css("animation","month"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes month"+index+"{0%{transform: rotateZ(0);transform-origin: -"+monthLeft+" "+top+";}100%{transform:rotateZ("+-(360/12)*(index)+"deg);transform-origin: -"+monthLeft+" "+top+";}}",style.rules.length);

        });
    }, 0);


    setTimeout(function () {
        $(".day span").each(function(index,element){
            $(element).css("animation","day"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes day"+index+"{0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.days.length)*index+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);
        });
    }, 1000);

    setTimeout(function () {
        $(".week span").each(function(index,element){
            $(element).css("animation","week"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes week"+index+"{0%{transform: rotateZ(0);transform-origin: -"+weekLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.weeks.length)*index+"deg);transform-origin: -"+weekLeft+" "+top+";}}",style.rules.length);

        });
    }, 2000);

    setTimeout(function () {
        $(".hour span").each(function(index,element){
            $(element).css("animation","hour"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes hour"+index+"{0%{transform: rotateZ(0);transform-origin: -"+hourLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.hours.length)*index+"deg);transform-origin: -"+hourLeft+" "+top+";}}",style.rules.length);
        });
        
    }, 3000);

    setTimeout(function () {
        $(".minute span").each(function(index,element){
            $(element).css("animation","minute"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes minute"+index+"{0%{transform: rotateZ(0);transform-origin: -"+minuteLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.minutes.length)*index+"deg);transform-origin: -"+minuteLeft+" "+top+";}}",style.rules.length);
        });
        
    }, 4000);


    setTimeout(function () {
        $(".second span").each(function(index,element){
            $(element).css("animation","second"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes second"+index+"{0%{transform: rotateZ(0);transform-origin: -"+secondLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.seconds.length)*index+"deg);transform-origin: -"+secondLeft+" "+top+";}}",style.rules.length);
        });
        
    }, 5000);

    

    
    //旋转"+((index+1)*360)+"deg
    setTimeout(function () {

        $(".year span").css("animation","yearRun 3s linear infinite");
        style.insertRule("@-webkit-keyframes yearRun {0%{transform: rotateZ(0);transform-origin: -"+yearLeft+" "+top+"; opacity:1;}100%{transform:rotateZ(360deg);transform-origin: -"+yearLeft+" "+top+";opacity:0;}}",style.rules.length);


        $($(".main-content .second span")[0]).removeClass("current");
        $(".second span").each(function(index,element){
            $(element).css("animation","secondRun"+index+" 3s linear infinite");
            style.insertRule("@-webkit-keyframes secondRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+secondLeft+" "+top+";opacity:1;}100%{transform:rotateZ("+((index+1)*360)+"deg);transform-origin: -"+secondLeft+" "+top+";opacity:0;}}",style.rules.length);
            
        });


        $($(".main-content .minute span")[0]).removeClass("current");
        $(".minute span").each(function(index,element){
            $(element).css("animation","minuteRun"+index+" 3s linear infinite");
            style.insertRule("@-webkit-keyframes minuteRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+minuteLeft+" "+top+";opacity:1;}100%{transform:rotateZ("+((index+1)*360)+"deg);transform-origin: -"+minuteLeft+" "+top+";opacity:0;}}",style.rules.length);
            
        });


        $($(".main-content .hour span")[0]).removeClass("current");
        $(".hour span").each(function(index,element){
            $(element).css("animation","hourRun"+index+" 3s linear infinite");
            style.insertRule("@-webkit-keyframes hourRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+hourLeft+" "+top+";opacity:1;}100%{transform:rotateZ("+((index+1)*360)+"deg);transform-origin: -"+hourLeft+" "+top+";opacity:0;}}",style.rules.length);
            
        });


        $($(".main-content .week span")[0]).removeClass("current");
        $(".week span").each(function(index,element){
            $(element).css("animation","weekRun"+index+" 3s linear infinite");
            style.insertRule("@-webkit-keyframes weekRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+weekLeft+" "+top+";opacity:1;}100%{transform:rotateZ("+((index+1)*360)+"deg);transform-origin: -"+weekLeft+" "+top+";opacity:0;}}",style.rules.length);
            
        });

        $($(".main-content .day span")[0]).removeClass("current");
        $(".day span").each(function(index,element){
            $(element).css("animation","dayRun"+index+" 3s linear infinite");
            style.insertRule("@-webkit-keyframes dayRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";opacity:1;}100%{transform:rotateZ("+((index+1)*360)+"deg);transform-origin: -"+dayLeft+" "+top+";opacity:0;}}",style.rules.length);
            
        });

        $($(".main-content .month span")[0]).removeClass("current");
        $(".month span").each(function(index,element){
            $(element).css("animation","monthRun"+index+" 3s linear infinite");
            style.insertRule("@-webkit-keyframes monthRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+monthLeft+" "+top+";opacity:1;}100%{transform:rotateZ("+((index+1)*360)+"deg);transform-origin: -"+monthLeft+" "+top+";opacity:0;}}",style.rules.length);
            
        });


    }, 6000);


    //初始化当前时间
    setTimeout(function () {
        var myDate = new Date();
        Time.currentTime.year=myDate.getFullYear();
        Time.currentTime.month=myDate.getMonth()+1;
        Time.currentTime.day=myDate.getDate();
        Time.currentTime.week=myDate.getDay();
        Time.currentTime.hour=myDate.getHours();
        Time.currentTime.minute=myDate.getMinutes();
        Time.currentTime.second=myDate.getSeconds();
        initTime(Time);

        $year.html("");
        $year.append("<span class='current'>"+Time.currentTime.year+Time.yearUnit+"</span>");

        $second.html("");
        $second.append("<span class='current'>"+Time.currentTime.second+Time.secondUnit+"</span>");
        for (const key in Time.seconds) {
            if (Time.seconds.hasOwnProperty(key)) {
                const element = Time.seconds[key];
                if(element!==Time.currentTime.second){
                    $(".main-content .second").append("<span>"+element+Time.secondUnit+"</span>");
                }
            }
        }

        $minute.html("");
        $minute.append("<span class='current'>"+Time.currentTime.minute+Time.minuteUnit+"</span>");
        for (const key in Time.minutes) {
            if (Time.minutes.hasOwnProperty(key)) {
                const element = Time.minutes[key];
                if(element!==Time.currentTime.minute){
                    $(".main-content .minute").append("<span>"+element+Time.minuteUnit+"</span>");
                }
            }
        }

        $hour.html("");
        $hour.append("<span class='current'>"+Time.currentTime.hour+Time.hourUnit+"</span>");
        for (const key in Time.hours) {
            if (Time.hours.hasOwnProperty(key)) {
                const element = Time.hours[key];
                if(element!==Time.currentTime.hour){
                    $(".main-content .hour").append("<span>"+element+Time.hourUnit+"</span>");
                }
            }
        }


        $week.html("");
        $week.append("<span class='current'>"+Time.currentTime.week+"</span>");
        for (const key in Time.weeks) {
            if (Time.weeks.hasOwnProperty(key)) {
                const element = Time.weeks[key];
                if(element!==Time.currentTime.week){
                    $(".main-content .week").append("<span>"+element+"</span>");
                }
            }
        }


        $day.html("");
        $day.append("<span class='current'>"+Time.currentTime.day+Time.dayUnit+"</span>");
        for (const key in Time.days) {
            if (Time.days.hasOwnProperty(key)) {
                const element = Time.days[key];
                if(element!==Time.currentTime.day){
                    $(".main-content .day").append("<span>"+element+Time.dayUnit+"</span>");
                }
            }
        }

        $month.html("");
        $month.append("<span class='current'>"+Time.currentTime.month+Time.monthUnit+"</span>");
        for (const key in Time.months) {
            if (Time.months.hasOwnProperty(key)) {
                const element = Time.months[key];
                if(element!==Time.currentTime.month){
                    $(".main-content .month").append("<span>"+element+Time.monthUnit+"</span>");
                }
            }
        }

    }, 9000);

    //转到当前时间
    setTimeout(function () {
        $(".second span").each(function(index,element){
            $(element).css("animation","second"+index+" 3s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes second"+index+"{0%{transform: rotateZ(0);transform-origin: -"+secondLeft+" "+top+";opacity:0;}100%{transform:rotateZ("+-(360/Time.seconds.length)*index+"deg);transform-origin: -"+secondLeft+" "+top+";opacity:1;}}",style.rules.length);

        });


        $(".minute span").each(function(index,element){
            $(element).css("animation","minute"+index+" 3s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes minute"+index+"{0%{transform: rotateZ(0);transform-origin: -"+minuteLeft+" "+top+";opacity:0;}100%{transform:rotateZ("+-(360/Time.minutes.length)*index+"deg);transform-origin: -"+minuteLeft+" "+top+";opacity:1;}}",style.rules.length);

        });


        $(".hour span").each(function(index,element){
            $(element).css("animation","hour"+index+" 3s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes hour"+index+"{0%{transform: rotateZ(0);transform-origin: -"+hourLeft+" "+top+";opacity:0;}100%{transform:rotateZ("+-(360/Time.hours.length)*index+"deg);transform-origin: -"+hourLeft+" "+top+";opacity:1;}}",style.rules.length);

        });


        $(".week span").each(function(index,element){
            $(element).css("animation","week"+index+" 3s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes week"+index+"{0%{transform: rotateZ(0);transform-origin: -"+weekLeft+" "+top+";opacity:0;}100%{transform:rotateZ("+-(360/Time.weeks.length)*index+"deg);transform-origin: -"+weekLeft+" "+top+";opacity:1;}}",style.rules.length);

        });


        $(".day span").each(function(index,element){
            $(element).css("animation","day"+index+" 3s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes day"+index+"{0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";opacity:0;}100%{transform:rotateZ("+-(360/Time.days.length)*index+"deg);transform-origin: -"+dayLeft+" "+top+";opacity:1;}}",style.rules.length);

        });


        $(".month span").each(function(index,element){
            $(element).css("animation","month"+index+" 3s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes month"+index+"{0%{transform: rotateZ(0);transform-origin: -"+monthLeft+" "+top+";opacity:0;}100%{transform:rotateZ("+-(360/Time.months.length)*index+"deg);transform-origin: -"+monthLeft+" "+top+";opacity:1;}}",style.rules.length);

        });

    }, 9000);

    setTimeout(function (){
        setInterval(run,1000)
    },9000)


    var seci=1;
    var mini=1;
    var houri=1;
    var weeki=1;
    var dayi=1;
    var monthi=1;


    function run(){
        var next=$(".second span.current").next();


        if(next.text()===""){
            next=$(".second span").first();
        }
        var secang1=6*(seci-1);
        var secang2=6*seci;
        $(".second").css("animation","secondRun"+seci+" 0.5s ease-in-out");
        $(".second").css("animation-fill-mode","forwards");
        style.insertRule("@-webkit-keyframes secondRun"+seci+"{0%{transform: rotateZ("+secang1+"deg);transform-origin: -"+secondLeft+" "+top+";} 50%{transform:rotateZ("+(secang2+1)+"deg);transform-origin: -"+secondLeft+" "+top+";} 100%{transform:rotateZ("+secang2+"deg);transform-origin: -"+secondLeft+" "+top+";}}",style.rules.length);

        $(".second span.current").removeClass("current");
        next.addClass("current");
        seci++;
        if(seci>60){
            seci=1;
        }



        //进分钟
        var secText=$(".second span.current").text();

        if(secText==="0秒"){
            var minang1=6*(mini-1);
            var minang2=6*mini;

            var next=$(".minute span.current").next();

            if(next.text()===""){
                next=$(".minute span").first();
            }

            $(".minute").css("animation","minuteRun"+mini+" 0.5s ease-in-out");
            $(".minute").css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes minuteRun"+mini+" {0%{transform: rotateZ("+minang1+"deg);transform-origin: -"+minuteLeft+" "+top+";} 100%{transform:rotateZ("+minang2+"deg);transform-origin: -"+minuteLeft+" "+top+";}}",style.rules.length);
            
            $(".minute span.current").removeClass("current");
            next.addClass("current");
            mini++;
            if(mini>60){
                mini=1;
            }
            
        }


        //进小时
        var minText=$(".minute span.current").text();

        if((secText==="0秒") &&(minText==="0分")){

            var hourang1=15*(houri-1);
            var hourang2=15*houri;

            var next=$(".hour span.current").next();

            if(next.text()===""){
                next=$(".hour span").first();
            }
            $(".hour").css("animation","hourRun"+houri+" 0.5s ease-in-out");
            $(".hour").css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes hourRun"+houri+" {0%{transform: rotateZ("+hourang1+"deg);transform-origin: -"+hourLeft+" "+top+";} 100%{transform:rotateZ("+hourang2+"deg);transform-origin: -"+hourLeft+" "+top+";}}",style.rules.length);
            
            $(".hour span.current").removeClass("current");
            next.addClass("current");
            houri++;
            if(houri>24){
                houri=1;
            }
            
        }


        //进星期和日
        if((secText==="0秒") && (minText==="0分")&&(hourText==="0时")){
            var weekang1=(360/7)*(weeki-1);
            var weekang2=(360/7)*weeki;
            var dayang1=(360/Time.days.length)*(dayi-1);
            var dayang2=(360/Time.days.length)*dayi;

            console.log(dayang1);
            var nextweek=$(".week span.current").next();
            var nextday=$(".day span.current").next();

            if(nextweek.text()===""){
                nextweek=$(".week span").first();
            }
            if(nextday.text()===""){
                nextday=$(".day span").first();
            }

            $(".week").css("animation","weekRun"+weeki+" 0.5s ease-in-out");
            $(".week").css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes weekRun"+weeki+" {0%{transform: rotateZ("+weekang1+"deg);transform-origin: -"+weekLeft+" "+top+";} 100%{transform:rotateZ("+weekang2+"deg);transform-origin: -"+weekLeft+" "+top+";}}",style.rules.length);
            
            $(".day").css("animation","dayRun"+dayi+" 0.5s ease-in-out");
            $(".day").css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes dayRun"+dayi+" {0%{transform: rotateZ("+dayang1+"deg);transform-origin: -"+dayLeft+" "+top+";} 100%{transform:rotateZ("+dayang2+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);



            $(".week span.current").removeClass("current");
            nextweek.addClass("current");
            weeki++;
            if(weeki>7){
                weeki=1;
            }

            $(".day span.current").removeClass("current");
            nextday.addClass("current");
            dayi++;
            if(dayi>Time.days.length){
                dayi=1;
            }
            
        }


        //进月
        var dayText=$(".day span.current").text();
        if((dayText===numToSimp(1)+"日"||dayText==="1日")&&(secText==="0秒") && (minText==="0分")&&(hourText==="0时")){

            var monthang1=30*(monthi-1);
            var monthang2=30*monthi;

            var next=$(".month span.current").next();

            if(next.text()==""){
                next=$(".month span").first();
            }
            $(".month").css("animation","monthRun"+monthi+" 0.5s ease-in-out");
            $(".month").css("animation-fill-mode","forwards");
            style.insertRule("@-webkit-keyframes monthRun"+monthi+" {0%{transform: rotateZ("+monthang1+"deg);transform-origin: -"+monthLeft+" "+top+";} 100%{transform:rotateZ("+monthang2+"deg);transform-origin: -"+monthLeft+" "+top+";}}",style.rules.length);
            

            month++;
            if(month>12)
            {
                month=1;
            }
            //更新日
            $(".day").html("");
            Time.days=updateDays(year,month,1);
            Time.currentTime.day=getFirstDay();
            $(".main-content .day").append("<span class='current'>"+Time.currentTime.day+Time.dayUnit+"</span>");
            for (const key in Time.days) {
                if (Time.days.hasOwnProperty(key)) {
                    const element = Time.days[key];
                    if(element!=Time.currentTime.day){
                        $(".main-content .day").append("<span>"+element+Time.dayUnit+"</span>");
                    }
                    
                }
                
            }
            $(".day span").each(function(index,element){
                $(element).css("animation","day"+index+" 0.5s linear");
                $(element).css("animation-fill-mode","forwards");
                style.insertRule("@-webkit-keyframes day"+index+"{0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.days.length)*(index+1)+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);
            });


            $(".month span.current").removeClass("current");
            next.addClass("current");
            monthi++;
            if(monthi>12){
                monthi=1;
            }
            
        }


        //进年

        if(month===1&&(dayText===numToSimp(1)+"日"||dayText==="1日")&&(secText==="0秒") && (minText==="0分")&&(hourText==="0时")){
            year++;
            Time.currentTime.year=getYear(year);
            $(".year span").html(getYear(year)+Time.yearUnit);
        }

    }


});



