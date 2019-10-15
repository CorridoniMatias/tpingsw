function clasificarTriangulo(a, b, c) {

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
  	return "Lado inv�lido";
  }
  
  if (a < 0 || b < 0 || c < 0) {
  	return "No se permite lado negativo";
  }
  
  if(a <= (abs(b-c)) || a >= (b+c)) {
  	return "Todo lado debe ser menor a la suma de los otros dos, y mayor a su diferencia";
  }
  
  if (a === b) {
  	if (a === c) {
    	return "Tri�ngulo equilatero";
    }
    return "Tri�ngulo is�sceles";
  }
  
  if (a === c) {
  	if (a === b) {
    	return "Tri�ngulo equilatero";
    }
    return "Tri�ngulo is�sceles";
  }
  
  if (b === c) {
  	if (b === a) {
    	return "Tri�ngulo equilatero";
    }
    return "Tri�ngulo is�sceles";
  }
  
  return "Tri�ngulo escaleno";  
  
}