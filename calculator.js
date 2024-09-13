//Problem-1
function calculateTax(income, expenses) {
    
    profit = income - expense
    tax = profit * 0.20
     if return "Invalid Input"

    const income = 10000;
    const expense = 3000;
    console.log (income-expense);

    const newprofit =+ (7000 * .20)
    console.log(newprofit);

}

//Problem-2
function sendNotification(email) {

    if (typeof email!=="string"){
        return "invalid string"
    }
      userName, domainName = email.split('@');

    const result = email.{username}+"@"+email. sent you an email from
       {domainname}+".com"
     return result 
}


//Problem-3
function checkDigitsInName(name) {
    if (typeof name! =="str"){
        return "invalid input"
    } 
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') 
    return true
    }
}

//Problem-4
function calculateFinalScore(obj) {
   if (typeof obj! == "object"){
    return "invalid input"
   }
   student = {
    name: 'Rajib',
    testScore: 50,
    schoolGrade: 30,
    isFFamily: True
}
   totalScore = testScore + schoolGrade
   if isFFamily:
       totalScore += 20

       return totalScore >= 80
}

//Problem-5
function  waitingTime(waitingTimes , serialNumber) {
 
    for (let i = 0; i < interviewTimes.length; i++) {
        sum += interviewTimes[i];
    }
    let averageTime = sum / interviewTimes.length;

    let remainingPeople = serialNumber - interviewTimes.length;

    let totalWaitingTime = remainingPeople * averageTime;

        return totalWaitingTime;
}