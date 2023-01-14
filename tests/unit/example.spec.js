// Se inicia con describe()
describe('Example Component', () => {

  // Dentro de la función test  se prueban piezas completas
  test('Debe de ser mayor a 10',()=>{
    // Arreglar
    let value = 10;

    // Estimula
    value = value+2;

    // Obervar el resultado
    expect(value).toBeGreaterThan(10);

  })
})
