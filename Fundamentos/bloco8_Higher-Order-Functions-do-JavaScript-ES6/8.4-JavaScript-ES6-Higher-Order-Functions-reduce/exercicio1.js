const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
 

  function flatten(arrays) {
    return arrays.reduce((acc, crr) => acc.concat(crr),[]);
  };


  // const reduceArray = arrays.reduce((acumulador, objeto) => {
  //   acumulador.push(objeto);
  //   console.log(`Acumulador: ${acumulador}, Objeto: ${objeto}`);
  //   return acumulador;
  // }, []);

  console.log(flatten(arrays));

