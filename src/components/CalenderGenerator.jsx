import Calender from './calender';

let monthIndex ={
    january:0,
    february:1,
    march: 2,
    april: 3,
    may:4,
    june:5,
    july:6,
    august:7,
    september:8,
    october:9,
    november:10,
    december:11
}

let day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
let dateDefault = new Date;
let userMonth = "december"//||Object.keys(monthIndex)[dateDefault.getMonth()];
let userYear = 2025||dateDefault.getYear()
let date = new Date(userYear,monthIndex[userMonth],1);//year,month,day(1-31)
let dayOfWeek = date.getDay();  //gets the index of the day of the week sunday=0,monday=1 
console.log(`month index is: ${monthIndex[userMonth]}`);
console.log(`the user month : ${userMonth}`)
console.log(`day of the week that 1 of userMonth falls in: ${dayOfWeek} which is ${day[dayOfWeek]}`);

let thirtyDaysMonth= ["september","april","june","november"];
let thirtyDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,""];
let thirtyOneDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let februaryDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, "", "", ""
];


    //append empty spaces for days(monday,tuesday...) with no number(1,2,3,4)
  function getCalenderArray() {
    let baseArray;

    if (thirtyDaysMonth.includes(userMonth)) {
        baseArray = [...thirtyDays]; 
    }else if(userMonth==="february"){
       baseArray = [...februaryDays]; 
    }
         else {
        baseArray = [...thirtyOneDays]; 
    }

    let i = 0;
    while (i < dayOfWeek) {
        baseArray.unshift("");
        i++;
    }

    return baseArray;
}

import React from 'react'

const CalenderGenerator = () => {
  return (
    <section className='flex flex-col justify-center items-center size-[360px] mx-auto'>
        <div class="w-full text-center mb-4">
        <h2 className="month inline-block">{userMonth.charAt(0).toUpperCase()+userMonth.slice(1)}</h2>
        <h2 className="year inline-block">{userYear}</h2>
        </div>
        
        <div className="flex w-full flex-col gap-2">

        
            <div className='grid grid-cols-7  w-full'>
            <h3>S</h3>
            <h3>M</h3>
            <h3>T</h3>
            <h3>W</h3>
            <h3>T</h3>
            <h3>F</h3>
            <h3>S</h3>
            </div>

            <Calender calenderArray={getCalenderArray()} />
        </div>
    </section>
  )
}

export default CalenderGenerator
