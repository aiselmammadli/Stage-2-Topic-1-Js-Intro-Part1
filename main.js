


// task1
var numChildren = 2;
var partnerName = "Dmitry Ivanov";
var geographicLocation = "Canada";
var jobTitle = "software developer";

// You will be a software developer in Canada, and married to Dmitry Ivanov with 2 kids.
var result = "You will be a " + jobTitle +  " in " + geographicLocation + ", and married to " + partnerName +
" with " + numChildren + " kids.";

console.log(result);









// task2
var birthYear = 1997;
var futureYear = 2030;

// 2030cu il ucun deqiq ay verilmediyine ona gore yas qeyri mueyyendir hemin il ucun 
//  yas tamamlanibsa;
var age1 = futureYear - birthYear;      
// yas tamamlanmayibsa;
var age2 = age1 - 1;      

var result = "I will be either " + age2 + " or " + age1 + " in " + futureYear;
  
console.log(result);









// task3
var currentAge = 28; // hazirki yasim
var maxAge = 80; // son
var perDay = 3; //yemek sayi

// geride qalan il
var yearsLeft = maxAge - currentAge; // 52

// geride qalan gunler
var daysLeft = yearsLeft * 365; // 52*365=  18.980 gun

// yeyilen qida 
var total = daysLeft * perDay; //gun*3= yemek sayi

var result = "You will need " + total + " to last you until the ripe old age of " + maxAge + ".";
console.log(result);


// task4
var radius = 5;
// cevrenin uzunlugu
var circumference = 2 * Math.PI * radius;
// sahe 
var area = Math.PI * radius * radius;

console.log("The circumference is" + circumference );
console.log("The area is" + area );

// task5
// Celsius & Fahrenheit
var celsius = 30;
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

// Fahrenheit & Celsius
var f = 100;
var c = (f - 32) * 5/9;
console.log(f + "°F is " + c + "°C");



// task6

