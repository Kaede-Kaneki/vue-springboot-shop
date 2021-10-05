/*
 * @Author: your name
 * @Date: 2021-10-02 15:46:35
 * @LastEditTime: 2021-10-02 15:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\js\getTime.js
 */
function getTime(){
    var time =new Date()
    var h=time.getHours()
    var s=''
    if(h>=5&&h<12){
        s='早上好~'
    }
    else if(h>=12&&h<14){
        s='中午好~'
    }
    else if(h>=14&&h<18){
        s='下午好~'
    }
    else if(h>=18&&h<24){
        s='晚上好~'
    }
    else if(h>=24&&h<5){
        s='深夜好~'
    }
    return s
}
export{
    getTime
}