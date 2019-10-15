const clasificarTriangulo = require('./script');

test("Un lado negativo devuelve un triangulo invalido", () => {
    expect(clasificarTriangulo(-5,10,10)).toBe("No se permite lado negativo")
});

test("La clasificacion falla si un lado esta en blanco", () => {
    expect(clasificarTriangulo(undefined, 10, 10)).toBe("Lado invalido");
});

test("Un lado mayor a la suma de los otros dos rompe todo", () => {
    expect(clasificarTriangulo(5, 5, 30)).toBe("Todo lado debe ser menor a la suma de los otros dos, y mayor a su diferencia");
});

test("Un triangulo con los 3 lados iguales es equilatero", () => {
    expect(clasificarTriangulo(5, 5, 5)).toBe("Triangulo equilatero");
});

test("Un triangulo con los 2 lados A, B iguales y uno distinto es isosceles", () => {
    expect(clasificarTriangulo(20, 20, 6)).toBe("Triangulo isosceles");
});

test("Un triangulo con los 2 lados A, C iguales y uno distinto es isosceles", () => {
    expect(clasificarTriangulo(20, 6, 20)).toBe("Triangulo isosceles");
});

test("Un triangulo con los 2 lados B, C iguales y uno distinto es isosceles", () => {
    expect(clasificarTriangulo(6, 20, 20)).toBe("Triangulo isosceles");
});

test("Un triangulo con los 3 lados distintos es escaleno", () => {
    expect(clasificarTriangulo(21, 20, 15)).toBe("Triangulo escaleno");
});

test("Un lado que no es un numero rompe el sistema xd", () => {
    expect(clasificarTriangulo(21, "pepes", 15)).toBe("Lado invalido");
});
