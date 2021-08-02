'use strict';

let valueOfsalesFile = document.getElementById('sales');

let workingHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

let tableBottomArray = [];

function WorkingLocation(minNumberOfCustomers, maxNumberOfCustomers, locationName , averageOfCookies, simulatedAmountsOfCookies) {
  this.minNumberOfCustomers = minNumberOfCustomers;
  this.maxNumberOfCustomers = maxNumberOfCustomers;
  this.locationName = locationName;
  this.totalOfCookies = 0;
  this.averageOfCookies = averageOfCookies;
  this.simulatedAmountsOfCookies = simulatedAmountsOfCookies;
}


WorkingLocation.prototype.getNumberOfCustomers = function (min, max) {
  let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
  return numberOfCustomers;
};
WorkingLocation.prototype.getCookiesPerHour = function (customers, average) {
  let cookiesPerHour = Math.round(customers * average);
  return cookiesPerHour;
};
WorkingLocation.prototype.getFinalResult = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
    this.totalOfCookies += this.simulatedAmountsOfCookies[i];
  }
  return this.simulatedAmountsOfCookies;
};


WorkingLocation.prototype.render = function () {
  let secElement = document.createElement('section');
  valueOfsalesFile.appendChild(secElement);

  let tabElement = document.createElement('table');
  secElement.appendChild(tabElement);

  let trElement = document.createElement('tr');
  tabElement.appendChild(trElement);

  // console.log(this.simulatedAmountsOfCookies[0]);

  tableBottomArray.push(this.simulatedAmountsOfCookies)[0];

  // for(let i = 0; i < workingHours.length; i++){
  //   tableBottomArray.push(this.simulatedAmountsOfCookies[0]);
  // }

  // console.log(workingHours.length);

  // for (let i = 0; i < workingHours.length; i++){
  //   let thElement = document.createElement('th');
  //   trElement.appendChild(thElement);
  //   thElement.textContent = [workingHours[i]];
  // }

  let tdElement1 = document.createElement('td');
  trElement.appendChild(tdElement1);
  tdElement1.textContent = this.locationName;
  // console.log(tdElement1);


  for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++){
    let tdElement2 = document.createElement('td');
    trElement.appendChild(tdElement2);
    tdElement2.textContent = [this.simulatedAmountsOfCookies[i]];
    // console.log(tdElement2);
  }


  //   <th>Firstname</th>
  //   <th>Lastname</th>
  //   <th>Age</th>
  // </tr>
  // <tr>
  //   <td>Jill</td>
  //   <td>Smith</td>
  //   <td>50</td>
  // </tr>
  // <tr>
  //   <td>Eve</td>
  //   <td>Jackson</td>
  //   <td>94</td>
  // </tr>

  // let ulElement = document.createElement('ul');
  // valueOfsalesFile.appendChild(ulElement);
  // for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
  //   let liElement = document.createElement('li');
  //   liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
  //   ulElement.appendChild(liElement);
  // }

  // let liElement = document.createElement('li');
  // liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
  // ulElement.appendChild(liElement);
};
// WorkingLocation.prototype.total = function() {
//   return this.tot6Am;
// };


let seattle = new WorkingLocation(23, 65,'Seattle', 6.3, []);

let tokyo = new WorkingLocation(3,24,'Tokyo',1.2,[]);

let dubai = new WorkingLocation(11,38,'Dubai',3.7,[]);

let paris = new WorkingLocation(20,38,'Paris',2.3,[]);

let lima = new WorkingLocation(2,16,'Lima',4.6,[]);

let workingLocationArray = [seattle,tokyo,dubai,paris,lima];

for(let i = 0; i < workingLocationArray.length; i++){
  workingLocationArray[i].getFinalResult();
  workingLocationArray[i].render();
  // workingLocationArray[i].total();
}
// console.log(seattle.total());

// console.log(tableBottomArray[0]);
// console.log(tableBottomArray[1]);



// console.log(seattleArray);
// console.log(tokyoArray);
// console.log(dubaiArray);
// console.log(parisArray);
// console.log(limaArray);

// let total6Am = seattleArray[0] + tokyoArray[0] + dubaiArray[0] + parisArray[0] + limaArray[0];
// console.log(total6Am);
// let totalOfTime = [];


let seattleArray = tableBottomArray[0];
let tokyoArray = tableBottomArray[1];
let dubaiArray = tableBottomArray[2];
let parisArray = tableBottomArray[3];
let limaArray = tableBottomArray[4];

function tableTopAndBottom() {
  let idTableTop = document.getElementById('tableTop');

  let tableTopElement = document.createElement('table');
  idTableTop.appendChild(tableTopElement);

  let trTopElement = document.createElement('tr');
  tableTopElement.appendChild(trTopElement);



  let idTableBottom = document.getElementById('tableBottom');

  let tableBottomElement = document.createElement('table');
  idTableBottom.appendChild(tableBottomElement);

  let trBottomlement = document.createElement('tr');
  tableBottomElement.appendChild(trBottomlement);


  for(let i = 0; i < workingHours.length; i++){
    let th1Element = document.createElement('th');
    trTopElement.appendChild(th1Element);
    th1Element.textContent = [workingHours[i]];

    let totalOfTime = seattleArray[i] + tokyoArray[i] + dubaiArray[i] + parisArray[i] + limaArray[i];
    let th2Element = document.createElement('th');
    trBottomlement.appendChild(th2Element);
    th2Element.textContent = totalOfTime;
    console.log(totalOfTime);
  }
  // for(let i = 0; i < workingHours.length; i++){
  //   // totalOfTime.push
  //   let totalOfTime = seattleArray[i] + tokyoArray[i] + dubaiArray[i] + parisArray[i] + limaArray[i];
  //   let th2Element = document.createElement('th');
  //   tableBottom.appendChild(th2Element);
  //   // th2Element.textContent = totalOfTime;
  //   console.log(totalOfTime);
  // }
}

tableTopAndBottom();


// const seattle = {
//   minNumberOfCustomers: 23,
//   maxNumberOfCustomers: 65,
//   locationName: 'seattle',
//   totalOfCookies: 0,
//   averageOfCookies: 6.3,
//   simulatedAmountsOfCookies: [],

//   getNumberOfCustomers: function (min, max) {
//     let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
//     return numberOfCustomers;
//   },

//   getCookiesPerHour: function (customers, average) {
//     let cookiesPerHour = Math.round(customers * average);
//     return cookiesPerHour;
//   },

//   getFinalResult: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
//       this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//     }
//     return this.simulatedAmountsOfCookies;
//   },
//   render: function () {
//     let h3Element = document.createElement('h3');
//     h3Element.textContent = this.locationName;
//     valueOfsalesFile.appendChild(h3Element);
//     let ulElement = document.createElement('ul');
//     valueOfsalesFile.appendChild(ulElement);
//     for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
//     ulElement.appendChild(liElement);
//   }
// };
// seattle.getFinalResult();
// seattle.render();



// const Tokyo = {
//   minNumberOfCustomers: 3,
//   maxNumberOfCustomers: 24,
//   locationName: 'Tokyo',
//   totalOfCookies: 0,
//   averageOfCookies: 1.2,
//   simulatedAmountsOfCookies: [],

//   getNumberOfCustomers: function (min, max) {
//     let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
//     return numberOfCustomers;
//   },

//   getCookiesPerHour: function (customers, average) {
//     let cookiesPerHour = Math.round(customers * average);
//     return cookiesPerHour;
//   },

//   getFinalResult: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
//       this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//     }
//     return this.simulatedAmountsOfCookies;
//   },
//   render: function () {
//     let h3Element = document.createElement('h3');
//     h3Element.textContent = this.locationName;
//     valueOfsalesFile.appendChild(h3Element);
//     let ulElement = document.createElement('ul');
//     valueOfsalesFile.appendChild(ulElement);
//     for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
//     ulElement.appendChild(liElement);
//   }
// };
// Tokyo.getFinalResult();
// Tokyo.render();



// const Dubai = {
//   minNumberOfCustomers: 11,
//   maxNumberOfCustomers: 38,
//   locationName: 'Dubai',
//   totalOfCookies: 0,
//   averageOfCookies: 3.7,
//   simulatedAmountsOfCookies: [],

//   getNumberOfCustomers: function (min, max) {
//     let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
//     return numberOfCustomers;
//   },

//   getCookiesPerHour: function (customers, average) {
//     let cookiesPerHour = Math.round(customers * average);
//     return cookiesPerHour;
//   },

//   getFinalResult: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
//       this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//     }
//     return this.simulatedAmountsOfCookies;
//   },
//   render: function () {
//     let h3Element = document.createElement('h3');
//     h3Element.textContent = this.locationName;
//     valueOfsalesFile.appendChild(h3Element);
//     let ulElement = document.createElement('ul');
//     valueOfsalesFile.appendChild(ulElement);
//     for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
//     ulElement.appendChild(liElement);
//   }
// };
// Dubai.getFinalResult();
// Dubai.render();



// const Paris = {
//   minNumberOfCustomers: 20,
//   maxNumberOfCustomers: 38,
//   locationName: 'Paris',
//   totalOfCookies: 0,
//   averageOfCookies: 2.3,
//   simulatedAmountsOfCookies: [],

//   getNumberOfCustomers: function (min, max) {
//     let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
//     return numberOfCustomers;
//   },

//   getCookiesPerHour: function (customers, average) {
//     let cookiesPerHour = Math.round(customers * average);
//     return cookiesPerHour;
//   },

//   getFinalResult: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
//       this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//     }
//     return this.simulatedAmountsOfCookies;
//   },
//   render: function () {
//     let h3Element = document.createElement('h3');
//     h3Element.textContent = this.locationName;
//     valueOfsalesFile.appendChild(h3Element);
//     let ulElement = document.createElement('ul');
//     valueOfsalesFile.appendChild(ulElement);
//     for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
//     ulElement.appendChild(liElement);
//   }
// };
// Paris.getFinalResult();
// Paris.render();



// const Lima = {
//   minNumberOfCustomers: 2,
//   maxNumberOfCustomers: 16,
//   locationName: 'Lima',
//   totalOfCookies: 0,
//   averageOfCookies: 4.6,
//   simulatedAmountsOfCookies: [],

//   getNumberOfCustomers: function (min, max) {
//     let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
//     return numberOfCustomers;
//   },

//   getCookiesPerHour: function (customers, average) {
//     let cookiesPerHour = Math.round(customers * average);
//     return cookiesPerHour;
//   },

//   getFinalResult: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
//       this.totalOfCookies += this.simulatedAmountsOfCookies[i];
//     }
//     return this.simulatedAmountsOfCookies;
//   },
//   render: function () {
//     let h3Element = document.createElement('h3');
//     h3Element.textContent = this.locationName;
//     valueOfsalesFile.appendChild(h3Element);
//     let ulElement = document.createElement('ul');
//     valueOfsalesFile.appendChild(ulElement);
//     for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
//     ulElement.appendChild(liElement);
//   }
// };
// Lima.getFinalResult();
// Lima.render();

