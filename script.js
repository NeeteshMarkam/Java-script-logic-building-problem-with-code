// //1.Finding the greatest of  numbers
// function greatestNum(num1,num2 ,num3) {

//     if (num1>num2 && num1>num3) {
//         console.log(`number first is greatest ${num1}`)
//     } else if(num1<num2 && num2>num3) {
//          console.log(`number second is greatest ${num2}`)
//     }
//     else if (num3>num1 && num3>num2) {
//                  console.log(`number third is greatest ${num3}`)

//     }
//     else{

//          console.log(` numbers are equl ${num1},${num2} ${num3}`)
// }
// }
// greatestNum(3,6 ,4)
// greatestNum(4,4 ,4)
// greatestNum(87,34 ,94)
// greatestNum(8,4,7)


// //2.Checking if a number is positive, nagative,or zero
// function checknumber(num3) {
//     if (num3>0) {
//         console.log(`value of number is positive ${num3}`)
//     } 
//     else if(num3<0){
// console.log(`value of number is nagative ${num3}`)
//     }
//     else {
//         console.log(`value of number is zero ${num3}`)
//     }
// }
// checknumber(3)
// checknumber(0)
// checknumber(-23)

// let a = 8;
// let result = a>0?'positive':a<0?nagative: "zero";
// console.log(result)

// //3.check if a year is a leap year
// // if(year%4==0 && year % 100 != 0|| year %400 == 0)
// function checkLeapYear(year) {
//     if(year%4==0 && year % 100 != 0|| year %400 == 0) {
//         console.log(`this is leap year ${year}`)
//     }
//     else{
//         console.log(` this is not leap year,because year is not divisible by 4,100,400 if year divisible with third of them than will leap year` )
//     }
// }
// checkLeapYear(2000)



// //4. check number is divisible by 3 and 5
// function divis(a) {   
//     if (a%3==0&& a%5==0) {
//         console.log(`number is divisible by 3and 5`)
// }
// else if (a%3==0) {
//     console.log(`number is divisible with only 3 not 5 number is ${a}`)
// }
// else if (a%5==0) {
//     console.log(`number is divisible with only 5 not 3 number is ${a}`)
// }
// else{
//     console.log(`number is not divisible by both 3,5 number is ${a} `)
// }
// }
// divis(40)
// divis(14)
// divis(15)
// divis(9)

// //5.Check if a Character is a Vowel or Consonant
// function charVowelorConsan(char){

//     let vowel = "aeiouAEIOU";

//     if (vowel.includes(char)) {
//         console.log(`${char} is a vowel`)
//     }
//     else{
//         console.log(`${char} is a consonant`) 
//     }
// }
// charVowelorConsan('a')
// charVowelorConsan('I')
// charVowelorConsan("b")


// //6.Checking if a number is a palindrome (same forward/backward, like 121)
// function palindrome(palinum) {

//     let original = palinum;
//     let reversad = 0;
//     while (palinum>0) {
//         let digits = palinum%10;
//         reversad= reversad*10+digits;
//        palinum= Math.floor(palinum/10)
//     }

//     if (reversad==original) {
//         console.log(`is palindrome number `)
//     } else {
//         console.log(`is not palindrome number `)
//     }  
// }
// palindrome(121)
// palindrome(123)


// //7.Finding the sum of digits of a number (like 123 → 1+2+3=6)?
// function digitsum(a) {

//     let sum=0;
//    while (a>0) {
//     let digits = a%10;
//     sum+=digits;
//     a=Math.floor(a/10)
// }
// console.log('sum of digits'+sum)
// }
// digitsum(823)

// //8.Check Whether a Number is an Armstrong Number
// function armstrongCheck(armNumber) {

//     let original = armNumber;
//     let armSum = 0;
//     let power = armNumber.toString().length;
//     while (armNumber>0) {
//         let digits = armNumber%10;
//         armSum+=Math.pow(digits,power)

//         armNumber = Math.floor(armNumber/10)
//     }
//     if (original==armSum) {
//         console.log(`${original} number is armstrong number `)
//     } else {
//         console.log(`${original} number is armstrong not number `)
//     }
// }
// armstrongCheck(153)
// armstrongCheck(123)
// armstrongCheck(370)
// armstrongCheck(1634)


// //9.Find the Sum of Even and Odd Digits Separately
// function evenOddSepatately(num) {
//     let evenSum = 0;
//     let oddSum =0;
//     while (num > 0) {
//         let digit = num % 10
//         if (digit % 2 == 0) {
//         evenSum+=digit;
//         } else {
//              oddSum+=digit
//         }
//         num=Math.floor(num/10)
//     }
//    console.log(`sum of even digits: ${evenSum}`)
//      console.log(`sum of odd digits: ${oddSum}`)
// }

// evenOddSepatately(12345)
// evenOddSepatately(987654)

// //10.Count Total, Even, and Odd Digits
// function totalEvenOddcount(num1) {
//     console.log(`Input: ${num1}`);
//     console.log(`Total digits: ${num1.toString().length}`)

//     let evencount =0;
//     let oddcount =0;

//     while (num1>0) {
//         let digit = num1%10;
//         if (digit%2==0) {
//             evencount++;
//         } else {
//             oddcount++;
//         }
//         num1=Math.floor(num1/10)
//     }
//      console.log(`Even digits: ${evencount}`);
//      console.log(`Odd digits: ${oddcount}`);

// }
// totalEvenOddcount(24631)


// //11.Finding largest and smallest digit in a number?
// function largestSmallerDigit(num) {
//     let largest = 0;
//     let smaller = 9;
//     while (num > 0) {
//         let digit = num % 10;

//         if (digit > largest) {
//             largest = digit;
//         }
//         else{
//             smaller = digit;

//         }
//         num = Math.floor(num / 10)
//     }
//     console.log(`Largest digit:${largest}`);
//     console.log(`smallest digit:${smaller}`);
// }
// largestSmallerDigit(23464)

// //12.Checking prime numbers (new logical pattern),
// function primeNumberCheck(num) {

//     if (num<=1) {
//         console.log(`this is not prime number`)
//         return;
//     }

//     let isprimeflag = true;

//     for (let i = 2; i <= num-1; i++) {
//         if (num%i===0) {
//             isprimeflag=false;
//             break;
//         }
//     }
//     if (isprimeflag) {
//           console.log(`this is prime number`)
//     } else {
//            console.log(`this is not prime number`)        

//     }
// }
// primeNumberCheck(9)



////13.Print all prime numbers in a given range (example: from 1 to 100).
// function printPrimeInrange(star,end) { 
//     for(let num = star;num<=end;num++){
//         if (isprime(num)) {
//             console.log(num)
//         }
//     }
// }
// function isprime(num) {
//     if (num<=1) return false;
//     for (let i = 2; i <=Math.sqrt(num); i++) {
//        if (num%i ===0) return false;
//     }
//     return true;
// }
// printPrimeInrange(1,100)


// //14.“Generate Fibonacci series”?
// function fibonacci(num) {
//     let a = 0;
//     let b =1;
// console.log(a);
// console.log(b);
//  for (let i = 1; i <= num; i++) {
//       let seq = a+b;
//       console.log(seq)
//       a=b;
//       b=seq;

//     }
// }
// fibonacci(5)



// //15.Perfect numbers (sum of factors = number)
// function numberFactor(num) {
//     let sum =0;
//     for(let i=1;i<=num-1;i++){
//         if (num%i===0) {
//             sum+=i;
//         }
//     }
//     if (sum===num) {
//         console.log(`${num} is a perfect number`);
//     } else {
//           console.log(`${num} is not a perfect number`);
//     }

// }
// numberFactor(28)
// numberFactor(6)
// numberFactor(12)



// //16.Strong Number (sum of factorials of digits = number)
// function strongNumber(num) {
// let original = num;
// let sum =0;
//     while (num>0) {

//         let digit = num % 10;
//         sum +=factorial(digit)
//         num = Math.floor(num/10);
//     }
//     if (sum===original) {
//         console.log(`${original} is a Strong Number`);
//     } else {
//         console.log(`${original} is not a Strong Number`);
//     }
// }

// function factorial(n) {
//     let fact =1;
//     for(let i=1;i<=n;i++){
//         fact*=i;
//     }
//     return fact;
// }
// strongNumber(145);
// strongNumber(2);
// strongNumber(123);




