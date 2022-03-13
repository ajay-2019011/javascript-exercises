const findTheOldest = function(people) {
  let age, i,maxAge=0,oldest, today, currentYear;
  for (i = 0; i < people.length; i++){
    if (people[i].yearOfDeath == null) {
      today = new Date();
      currentYear = today.getFullYear();
      age = currentYear - people[i]['yearOfBirth'];
    }
    else  
      age = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
    if (maxAge < age) {
      maxAge = age;
      oldest = i;
    }
  }
  return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
