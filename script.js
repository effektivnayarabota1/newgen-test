// Список курсов
let courses = [
	  { name: "Courses in England", prices: [0, 100] },
	  { name: "Courses in Germany", prices: [500, null] },
	  { name: "Courses in Italy", prices: [100, 200] },
	  { name: "Courses in Russia", prices: [null, 400] },
	  { name: "Courses in China", prices: [50, 250] },
	  { name: "Courses in USA", prices: [200, null] },
	  { name: "Courses in Kazakhstan", prices: [56, 324] },
	  { name: "Courses in France", prices: [null, null] }
];

function filterByPrice(array, range) {
	  return array.filter((i) => {
		      return inRange(range, i.prices);
		    });
}

function inRange(range, prices) {
	  const bottomPrice = prices[0];
	  const topPrice = prices[1];
	  const bottomRange = range[0];
	  const topRange = range[1];

	  if (bottomPrice === null || topRange === null || bottomPrice <= topRange) {
		      if (topPrice === null || bottomRange === null || topPrice >= bottomRange) {
				        return true;
				      }
		    }
	  return false;
}

function sortByPrice(array, option) {
	  return array.sort((a, b) => {
		      return compare(a, b, option);
		    });
}

function compare(a, b, option) {
	  let index, direction;
	  if (option === 0) {
		      index = 0;
		      direction = 1;
		    } else if (option === 1) {
				    index = 1;
				    direction = -1;
				  } else console.log("option incorrect");

	  if (a.prices[index] < b.prices[index] || a.prices[index] === null) {
		      return -direction;
		    }
	  if (a.prices[index] > b.prices[index]) {
		      return direction;
		    }
	  return 0;
}

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

console.log(sortByPrice(filterByPrice(courses, requiredRange1), 0));
console.log(sortByPrice(filterByPrice(courses, requiredRange2), 0));
console.log(sortByPrice(filterByPrice(courses, requiredRange3), 0));

