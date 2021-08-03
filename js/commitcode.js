// 'use strict';

// let valueOfsalesFile = document.getElementById('sales');

// let workingHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

// let tableBottomArray = [];

// let totalOfCookiesArray = [];

// // let totalOfTotalArray = [];

// function WorkingLocation(minNumberOfCustomers, maxNumberOfCustomers, locationName, averageOfCookies) {
//   this.minNumberOfCustomers = minNumberOfCustomers;
//   this.maxNumberOfCustomers = maxNumberOfCustomers;
//   this.locationName = locationName;
//   this.totalOfCookies = 0;
//   this.averageOfCookies = averageOfCookies;
//   this.simulatedAmountsOfCookies = [];
// }


// WorkingLocation.prototype.getNumberOfCustomers = function (min, max) {
//   let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
//   return numberOfCustomers;
// };
// WorkingLocation.prototype.getCookiesPerHour = function (customers, average) {
//   let cookiesPerHour = Math.round(customers * average);
//   return cookiesPerHour;
// };
// WorkingLocation.prototype.getFinalResult = function () {
//   for (let i = 0; i < workingHours.length; i++) {
//     this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
//     this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//   }
//   return this.simulatedAmountsOfCookies;
// };


// WorkingLocation.prototype.render = function () {
//   let secElement = document.createElement('section');
//   valueOfsalesFile.appendChild(secElement);

//   let tabElement = document.createElement('table');
//   secElement.appendChild(tabElement);

//   let trElement = document.createElement('tr');
//   tabElement.appendChild(trElement);

//   tableBottomArray.push(this.simulatedAmountsOfCookies)[0];


//   let thElement1 = document.createElement('th');
//   trElement.appendChild(thElement1);
//   thElement1.textContent = this.locationName;


//   for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//     let tdElement2 = document.createElement('td');
//     trElement.appendChild(tdElement2);
//     tdElement2.textContent = [this.simulatedAmountsOfCookies[i]];
//   }
//   let tdElement3 = document.createElement('td');
//   tdElement3.textContent = this.totalOfCookies;
//   trElement.appendChild(tdElement3);
//   totalOfCookiesArray.push (this.totalOfCookies)[0];
// };


// let seattle = new WorkingLocation(23, 65, 'Seattle', 6.3, []);

// let tokyo = new WorkingLocation(3, 24, 'Tokyo', 1.2, []);

// let dubai = new WorkingLocation(11, 38, 'Dubai', 3.7, []);

// let paris = new WorkingLocation(20, 38, 'Paris', 2.3, []);

// let lima = new WorkingLocation(2, 16, 'Lima', 4.6, []);

// let workingLocationArray = [seattle, tokyo, dubai, paris, lima];

// for (let i = 0; i < workingLocationArray.length; i++) {
//   workingLocationArray[i].getFinalResult();
//   workingLocationArray[i].render();
// }

// let seattleArray = tableBottomArray[0];
// let tokyoArray = tableBottomArray[1];
// let dubaiArray = tableBottomArray[2];
// let parisArray = tableBottomArray[3];
// let limaArray = tableBottomArray[4];

// // let locations = tableBottomArray;

// // console.log(tableBottomArray[0]);

// // for(let i = 0; i < totalOfCookiesArray.length; i++){
// //   console.log(locations[i]);
// // }

// function tableTop() {
//   let idTableTop = document.getElementById('tableTop');

//   let tableTopElement = document.createElement('table');
//   idTableTop.appendChild(tableTopElement);
//   let trTopElement = document.createElement('tr');
//   tableTopElement.appendChild(trTopElement);
//   workingHours.unshift('Location Names');
//   workingHours.push('Location Totals');
//   for (let i = 0; i < workingHours.length; i++) {
//     let th1Element = document.createElement('th');
//     trTopElement.appendChild(th1Element);
//     th1Element.textContent = [workingHours[i]];
//   }
//   workingHours.shift();
//   workingHours.pop();
// }

// tableTop();


// function tableBottom() {
//   let idTableBottom = document.getElementById('tableBottom');

//   let tableBottomElement = document.createElement('table');
//   idTableBottom.appendChild(tableBottomElement);
//   let trBottomlement = document.createElement('tr');
//   tableBottomElement.appendChild(trBottomlement);

//   let totalElement = document.createElement('th');
//   trBottomlement.appendChild(totalElement);
//   totalElement.textContent = 'total';

//   for (let i = 0; i < workingHours.length; i++) {
//     let totalOfTime = seattleArray[i] + tokyoArray[i] + dubaiArray[i] + parisArray[i] + limaArray[i];
//     console.log(totalOfTime);
//     // totalOfTotalArray.push(totalOfTime);
//     let th2Element = document.createElement('th');
//     trBottomlement.appendChild(th2Element);
//     th2Element.textContent = totalOfTime;
//   }

//   let valueOfTotal = totalOfCookiesArray;
//   let total = valueOfTotal.reduce(function(accumulator, currentValue)
//   { return accumulator + currentValue; }, 0);

//   let totalOfTotal = document.createElement('th');
//   trBottomlement.appendChild(totalOfTotal);
//   totalOfTotal.textContent = total;
// }

// tableBottom();

