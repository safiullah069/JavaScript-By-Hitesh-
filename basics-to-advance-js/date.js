console.log(`Checking Files`);

const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();

// console.log(date1);
// Expected output: 19

const eventBirthday = new Date(`2002-4-23`);

// console.log(eventBirthday.getDate());
const day = eventBirthday.getDay();
const dayArray = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, ]
// console.log(dayArray[day]);

const today = new Date();
// console.log(today);

const customizeDate = new Date(`2000-1-22`)
// console.log(customizeDate);

const calculationOnDate = () => {const birthday = customizeDate.getDay();
    const birthdayMonth = customizeDate.getMonth();
    arrayDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "THursday", "Friday", "Saturday"];
    arrayMonth = ["January", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return `I was born on ${customizeDate.getDate()} ${arrayMonth[birthdayMonth]} And The Day Was ${arrayDay[birthday]} And The Year Was ${customizeDate.getFullYear()}`
}

// console.log(calculationOnDate());

// ---------- getMinutes ------------

const getTheMIn = new Date()

// console.log(getTheMIn.getMinutes());

const getYourCurrentHour = () => {
    const rawHour = getTheMIn.getHours();
    if (rawHour > 12) {
        const updatedHour = rawHour - 12
        return updatedHour;
    }else{
        return rawHour;
    }
    
}


// console.log(getYourCurrentHour());

// console.log(getTheMIn.getHours());
// console.log(getTheMIn.getDate());
// console.log(getTheMIn.getFullYear());
// console.log(getTheMIn.getMonth());

// ------------ Set Functions OF Date ---------

