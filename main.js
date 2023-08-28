// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript
const solve = (arr) => {
  const absCounts = new Map();
  const result = [];
  arr.forEach(num => {
    const absNum = Math.abs(num);
    absCounts.set(absNum, (absCounts.get(absNum) || 0) + 1);
  });
  arr.forEach(num => {
    const absNum = Math.abs(num);
    if (!absCounts.get(absNum) > 2 === 0) {
      console.log(absCounts.get(absNum))
    }
    if (absCounts.get(absNum) === 1) {
      result.push(num);
      absCounts.delete(absNum);
    }
  });
  return +result.join('');
}

console.log(solve([1,-1,2,-2,3]));
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]))

// KATA 2 7kyu
// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
const outed = (meet, boss) => {
  let names = Object.keys(meet);
  let score = names.reduce((a,b) =>
    a + meet[b], 0 + meet[boss]);
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));

// KATA 3 7kyu
//  https://www.codewars.com/kata/the-office-ii-boredom-score
const boredom = staff => {
  const deptScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  }
  let score = Object.keys(staff).reduce((a,b) => a + deptScores[staff[b]], 0); 
  return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}

console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }));

// KATA 4 7kyu
// https://www.codewars.com/kata/the-office-iii-broken-photocopier
const broken = x => x.split('').map(el => el == '1' ? '0' : '1').join('');

console.log(broken("10000000101101111110011001000"));  

// KATA 5 7kyu
// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript
const meeting = x => x.includes(`O`) ? x.indexOf(`O`) : `None available!`;

console.log(meeting(['X', 'O', 'X']));
console.log(meeting(['X', 'X', 'X']));


