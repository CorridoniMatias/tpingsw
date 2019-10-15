function clasificarTriangulo(a, b, c) {

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
  	return "Lado inválido";
  }
  
  if (a < 0 || b < 0 || c < 0) {
  	return "No se permite lado negativo";
  }
  
  if(a <= (abs(b-c)) || a >= (b+c)) {
  	return "Todo lado debe ser menor a la suma de los otros dos, y mayor a su diferencia";
  }
  
  if (a === b) {
  	if (a === c) {
    	return "Triángulo equilatero";
    }
    return "Triángulo isósceles";
  }
  
  if (a === c) {
  	if (a === b) {
    	return "Triángulo equilatero";
    }
    return "Triángulo isósceles";
  }
  
  if (b === c) {
  	if (b === a) {
    	return "Triángulo equilatero";
    }
    return "Triángulo isósceles";
  }
  
  return "Triángulo escaleno";  
  
}