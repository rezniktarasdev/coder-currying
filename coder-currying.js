
// задачка на кодирование

encode = ((str) => {
   const arr = ['a', 'e', 'i', 'o', 'u'];
   return str.split('').map(elem => {
      let index = arr.indexOf(elem);
      return index !== -1 ? index + 1 : elem;
   }).join('');

});

console.log(encode('hello'));

// задачка на каррирование

function add(n) {
   if (n === undefined) return 0;
   let sum = n;
   return function recursive(num) {
      if (num === undefined) return sum;
      sum += num;
      return recursive;
   }
}

console.log(add());//0;
console.log(add(2)()); //2;
console.log(add(2)(1)()); //3;
console.log(add(5)(-1)(2)()); //6;