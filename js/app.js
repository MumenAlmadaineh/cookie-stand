'use strict';

let salesFile = document.getElementById('sales');

let tabElement = document.createElement('table');
salesFile.appendChild(tabElement);

let trElement = document.createElement('tr');
tabElement.appendChild(trElement);

let workingHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

let totalOfCookiesArray = [];

let objectArray = [];

function WorkingLocation(minNumberOfCustomers, maxNumberOfCustomers, locationName, averageOfCookies) {
  this.minNumberOfCustomers = minNumberOfCustomers;
  this.maxNumberOfCustomers = maxNumberOfCustomers;
  this.locationName = locationName;
  this.totalOfCookies = 0;
  this.averageOfCookies = averageOfCookies;
  this.simulatedAmountsOfCookies = [];
  objectArray.push(this);
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

  let tr1Element = document.createElement('tr');
  tabElement.appendChild(tr1Element);

  let thElement1 = document.createElement('th');
  thElement1.textContent = this.locationName;
  tr1Element.appendChild(thElement1);

  for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
    let tdElement2 = document.createElement('td');
    tdElement2.textContent = this.simulatedAmountsOfCookies[i];
    tr1Element.appendChild(tdElement2);
  }
  let tdElement2 = document.createElement('td');
  tdElement2.textContent = this.totalOfCookies;
  tr1Element.appendChild(tdElement2);
  totalOfCookiesArray.push(this.totalOfCookies)[0];
};

let seattle = new WorkingLocation(23, 65, 'Seattle', 6.3, []);
let tokyo = new WorkingLocation(3, 24, 'Tokyo', 1.2, []);
let dubai = new WorkingLocation(11, 38, 'Dubai', 3.7, []);
let paris = new WorkingLocation(20, 38, 'Paris', 2.3, []);
let lima = new WorkingLocation(2, 16, 'Lima', 4.6, []);

let workingLocationArray = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < workingLocationArray.length; i++) {
  workingLocationArray[i].getFinalResult();
  workingLocationArray[i].render();
}

function tableTop() {
  workingHours.unshift('');
  workingHours.push('Total of daily total');
  for (let i = 0; i < workingHours.length; i++) {
    let th1Element = document.createElement('th');
    th1Element.textContent = workingHours[i];
    trElement.appendChild(th1Element);
  }
  workingHours.shift();
  workingHours.pop();
}

tableTop();

function tableBottom() {

  let trBottomlement = document.createElement('tr');
  tabElement.appendChild(trBottomlement);

  let totalElement = document.createElement('th');
  totalElement.textContent = 'total';
  trBottomlement.appendChild(totalElement);

  for (let i = 0; i < workingHours.length; i++) {
    let totalColom = 0;
    for (let m = 0; m < objectArray.length; m++) {
      totalColom += objectArray[m].simulatedAmountsOfCookies[i];
    }
    let td2Element = document.createElement('td');
    td2Element.textContent = totalColom;
    trBottomlement.appendChild(td2Element);
  }

  let valueOfTotal = totalOfCookiesArray;
  let total = valueOfTotal.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);

  let totalOfTotal = document.createElement('td');
  totalOfTotal.textContent = total;
  trBottomlement.appendChild(totalOfTotal);
}

tableBottom();

let locationForm = document.getElementById('locationForm');
locationForm.addEventListener('submit', getFormData);

function getFormData(event) {
  event.preventDefault();
  let nameOflocation = event.target.nameOflocation.value;
  let minCustomersNumber = parseInt(event.target.minCustomersNumber.value);
  let maxCustomersNumber = parseInt(event.target.maxCustomersNumber.value);
  let cookiesAverage = parseInt(event.target.cookiesAverage.value);
  let newLocation = new WorkingLocation(minCustomersNumber, maxCustomersNumber, nameOflocation, cookiesAverage, []);
  newLocation.getFinalResult();
  newLocation.render();
  tabElement.deleteRow(objectArray.length);
  tableBottom();
  locationForm.reset();
}

