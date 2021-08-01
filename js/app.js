let valueOfsalesFile = document.getElementById('sales');
let workingHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

const seattle = {
  minNumberOfCustomers: 23,
  maxNumberOfCustomers: 65,
  locationName: 'seattle',
  totalOfCookies: 0,
  averageOfCookies: 6.3,
  simulatedAmountsOfCookies: [],

  getNumberOfCustomers: function (min, max) {
    let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
    return numberOfCustomers;
  },

  getCookiesPerHour: function (customers, average) {
    let cookiesPerHour = Math.round(customers * average);
    return cookiesPerHour;
  },

  getFinalResult: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
      this.totalOfCookies += this.simulatedAmountsOfCookies[i];
    }
    return this.simulatedAmountsOfCookies;
  },
  render: function () {
    let h3Element = document.createElement('h3');
    h3Element.textContent = this.locationName;
    valueOfsalesFile.appendChild(h3Element);
    let ulElement = document.createElement('ul');
    valueOfsalesFile.appendChild(ulElement);
    for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
    ulElement.appendChild(liElement);
  }
};
seattle.getFinalResult();
seattle.render();

console.log(seattle.getFinalResult());

