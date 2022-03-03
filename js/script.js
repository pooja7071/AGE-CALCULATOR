const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function CalculateAge(){
    let today = new Date();
    let inputDate = new Date(document.
        getElementById("input_date").value);
     let birthMonth, birthDate, birthYear;

     let birthDate = inputDate.getDate();
     let birthMonth = inputDate.getMonth() + 1;
     let birthYear = inputDate.getUTCFullYear();

     //curren Data
     let currentYear = todayDate.getFullYear();
     let currentMonth = todayDate.getMonth() + 1;
     let currentDate = todayDate.getDate();
     
      leapChecker(currentYear);
    }
    //apply validations on date

        if(birthYear > currentYear || (birthMonth > currentMonth && birthYear == currentYear) ||
        (birthDate > currentDate && birthMonth == currentMonth && birthYear == currentYear))
        {
            alert( "Not Yet Born");
            return displayDOB("-","-","-");
        }
        totalYear = currentYear - birthYear;
        if(currentMonth >= birthMonth) {
        }else{  
            totalYear--;
            totalMonth = 12 + currentMonth - birthMonth;
        }
        if(currentDate>= birthDate) {
        }else{  
            totalMonth--;
            let days = months[currentMonth -2];
            totalDays = days + currentDate;
        }
        if(totalMonth < 0){
            totalMonth = 11;
            totalYear--;
        }
        

    }
    function displayDOB(bDate,bMonth , bYear)
    {
        document.getElementById(years).textContent = bYear;
        document.getElementById(months).textContent = bMonth;
        document.getElementById(days).textContent = bDate;
    }
    function leapChecker(year){
        if(year % 4 == 0 || (year%100  == 0 && year%400 == 0)) 
        {
            months[1] = 29 ;

        }
        else{
            months[1] = 28;
        }
    }
    function displayDOB(bDate, bMonth, bYear) {
        document.getElementById("years").
        textContent = bYear;
        document.getElementById("months").
        textContent = bMonth;
        document.getElementById("days").
        textContent = bDate;

    }
