const fibonacciNumbersGenerator = (upto: number) => {
  let fnum = 0;
  let snum = 1;
  let next = 0;
  for (let i = 0; i <= upto; i++) {
    next = fnum + snum;
    console.log(fnum);
    fnum = snum;
    snum = next;
  }
};
fibonacciNumbersGenerator(100);
