"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  var aleatorio = array[0];
  var left = [];
  var rigth = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > aleatorio) {
      rigth.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return quickSort(left).concat(aleatorio).concat(quickSort(rigth));
}
function merge(left, rigth) {
  var leftIndex = 0;
  var rigthIndex = 0;
  var arrOrder = [];
  while (leftIndex < left.length && rigthIndex < rigth.length) {
    if (left[leftIndex] < rigth[rigthIndex]) {
      arrOrder.push(left[leftIndex]);
      leftIndex++;
    } else {
      arrOrder.push(rigth[rigthIndex]);
      rigthIndex++;
    }
  }
  return arrOrder.concat(left.slice(leftIndex)).concat(rigth.slice(rigthIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  var divi = Math.floor(array.length / 2);
  var left = array.slice(0, divi);
  var rigth = array.slice(divi);

  return merge(mergeSort(left), mergeSort(rigth));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
