function clasificarTriangulo(a, b, c) {

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
  	return "Lado invalido";
  }
  
  if (a < 0 || b < 0 || c < 0) {
  	return "No se permite lado negativo";
  }
  
  if(a <= (Math.abs(b-c)) || a >= (b+c)) {
  	return "Todo lado debe ser menor a la suma de los otros dos, y mayor a su diferencia";
  }
  
  if (a === b) {
  	if (a === c) {
    	return "Triangulo equilatero";
    }
    return "Triangulo isosceles";
  }
  
  if (a === c) {
    return "Triangulo isosceles";
  }
  
  if (b === c) {
    return "Triangulo isosceles";
  }
  
  return "Triangulo escaleno";  
  
}

module.exports = clasificarTriangulo;