const fnHorasExtras = require("./horasExtras");

test("salario 10 por hora, horas trabalhadas 50, carga horaria 40, resultado esperado 100", () => {
    expect(fnHorasExtras(10,50,40)).toBe(100)
})

test("salario 10 por hora, horas trabalhadas 30, carga horaria 36, resultado esperado 0", () => {
    expect(fnHorasExtras(10,30,36)).toBe(0)
})

test("salario -10 por hora, horas trabalhadas 50, carga horaria 40, resultado esperado valores positivos", () => {
    expect(fnHorasExtras(-10,50,40)).toBe("Os valores devem ser positivos!")
})

test("salario 10 por hora, horas trabalhadas -50, carga horaria 40, resultado esperado valores positivos", () => {
    expect(fnHorasExtras(10,-50,40)).toBe("Os valores devem ser positivos!")
})

test("salario 10 por hora, horas trabalhadas 50, carga horaria -40, resultado esperado valores positivos", () => {
    expect(fnHorasExtras(10,50,-40)).toBe("Os valores devem ser positivos!")
})

test("salario A por hora, horas trabalhadas 50, carga horaria -40, resultado esperado valores positivos", () => {
    expect(fnHorasExtras('A',50,-40)).toBe("Os valores devem ser números!")
})

test("salario 10 por hora, horas trabalhadas A, carga horaria -40, resultado esperado valores positivos", () => {
    expect(fnHorasExtras(10,'A',-40)).toBe("Os valores devem ser números!")
})

test("salario 10 por hora, horas trabalhadas 50, carga horaria A, resultado esperado valores positivos", () => {
    expect(fnHorasExtras(10,50,'A')).toBe("Os valores devem ser números!")
})