// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  let newDriverArr = driversWithRevenueOver(drivers, revenue);
  newDriverArr = newDriverArr.map(function(driver){
    return driver.name;
  });
  return newDriverArr;
}


function exactMatch(drivers, info){
  return drivers.filter(function(driver){
    let key = Object.keys(info);
    return driver[key] === info[key];
  });
}

function exactMatchToList(drivers, info){
  let driverObjs = exactMatch(drivers, info);
  return driverObjs.map(function(driver){return driver.name});
}
