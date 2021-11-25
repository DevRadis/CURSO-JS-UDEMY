function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1callback);

function f1callback() {
  f2(f2callback);
  console.log(rand());  // coloquei apenas para saber o tempo de resposta randomica.
}

function f2callback() {
  f3(f3callback);
  console.log(rand());  // coloquei apenas para saber o tempo de resposta randomica.
}

function f3callback() {
  console.log('Olá mundo!');
  console.log(rand()); // coloquei apenas para saber o tempo de resposta randomica.

}


// f1(function() {
//   console.log(rand()); // coloquei apenas para saber o tempo de resposta randomica.
//   f2(function() {
//     console.log(rand()); // coloquei apenas para saber o tempo de resposta randomica.
//     f3(function() {
//       console.log('Olá mundo!');
//       console.log(rand()); // coloquei apenas para saber o tempo de resposta randomica.

//     });
//   });
// });