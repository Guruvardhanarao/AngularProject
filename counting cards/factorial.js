function factorialize(num) {
  for(var i = 1; i < num; i++)
    {
      num = i * num;
    }
  return num;
}
var res = factorialize(5);
console.log(res);
