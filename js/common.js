//简体
function numToSimp(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans="零一二三四五六七八九十";



    if(tens>1){
        str=trans.charAt(tens);
    }
    if(tens!=0){
        str+="十";
    }
    if(units!=0){
        str += trans.charAt(units);
    }

    if(tens==0&&units==0){
        str=trans[0];
    }
    
    return str;
}


function numToSim(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans="日一二三四五六";



    if(tens>1){
        str=trans.charAt(tens);
    }
    if(tens!=0){
        str+="十";
    }
    if(units!=0){
        str += trans.charAt(units);
    }

    if(tens==0&&units==0){
        str=trans[0];
    }

    return str;
}




function isLeapYear(year){
    if(year % 4 == 0 && year %100 != 0 ||year % 400 == 0)
    {
        return true;
    }else{
        return false;
    }
}


function getYear(year){
    var res=""
    var units=parseInt(year/1%10);
    var tens=parseInt(year/10%10);
    var hund=parseInt(year/100%10);
    var thou=parseInt(year/1000%10);

            res=year;

    return res;
}


function getMonths(month){
    var months=new Array();
    var i=1;

            for(i=month;i<=12;i++)
            {
                months.push(i);
            }
            for(i=1;i<month;i++)
            {
                months.push(i);
            }


    return months;
}


function getdays(year,month,day){
    var days=new Array();
    var j=1;
    var isLeap=isLeapYear(year);

            for(j=day;j<=31;j++)
            {
                days.push(j)
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }
            for(j=1;j<day;j++){
                days.push(j)
            }

    return days;
}



function getWeeks(week){
    weeks=[];
    var i=0;

            for(i=week;i<7;i++){
                weeks[i]="星期"+numToSim(i);
                if(i===0){
                    weeks[i]="星期日";
                }
            }
            for(i=0;i<week;i++){
                weeks[i]="星期"+numToSim(i);
            }

    return weeks;
}

function getWeek(week){
    res="";

            if(week===0){
                res="日";
            }else{
                res=numToSim(week);
            }

    return res;
}


function getHours(hour){
    var hours=new Array();
    var i=0;

            for(i=hour;i<24;i++){
                hours.push(i);
            }
            for(i=0;i<hour;i++){
                hours.push(i);
            }

    return hours;
}


function getMinutes(minute){
    var minutes=new Array();
    var i=0;

            for(i=minute;i<60;i++){
                minutes.push(i);
            }
            for(i=0;i<minute;i++){
                minutes.push(i);
            }

    return minutes;
}


function getSeconds(second){
    var seconds=new Array();
    var i=0;

            for(i=second;i<60;i++){
                seconds.push(i);
            }
            for(i=0;i<second;i++){
                seconds.push(i);
            }

    return seconds;
}



function updateDays(year,month,day){
    var days=new Array();
    var j=1;
    var isLeap=isLeapYear(year);

            for(j=day;j<=31;j++)
            {
                days.push(j)
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }
            for(j=1;j<day;j++){
                days.push(j)
            }

    return days;
}

function getFirstDay(){
    day=1;
            day=numToSimp(day);
    return day;
}