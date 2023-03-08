const fs = require('fs').promises;


// async function redAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
  
//   strings.forEach((string) => console.log(string));
// }

// async function main1() {
//   await redAll();
// }

// main1()

// async function getSimpsonsById(id) {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

//   if(!chosenSimpson){
//     throw new Error('id não encontrado!');
//   }
//   return chosenSimpson;
// }

// async function main2(){
//   const simpson = await getSimpsonsById();
//   console.log(simpson);
// }

// main2();

// async function filterSimpson(){

//   const fileContent = await fs.readFile('./simpsons.json','utf-8');
//   const simpsons = JSON.parse(fileContent);

//   const simpsonsFiltered = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10')

//   await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFiltered));
// }

// async function main3() {
//   await filterSimpson();
// }

// main3()

// async function family() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);

//   const simpsonFamily = simpsons.filter((simpson) => simpson.id <= '4');

//   await fs.writeFile('./simpsonFamilt.json', JSON.stringify(simpsonFamily));
// }

// async function main4() {
//   await family();
// }

// main4();

// async function addNelson(){
//   const contenFile = await fs.readFile('./simpsonFamilt.json', 'utf-8');
//   const family = JSON.parse(contenFile);

//   const Nelson = { id: '8', name: 'Nelson Muntz' };

//   await fs.writeFile('./simpsonFamilt.json', JSON.stringify([Nelson, ...family]));

// }

// async function main5() {
//   await addNelson();
// }

// main5();

async function updateFamily() {
  const contenFile = await fs.readFile('./simpsonFamilt.json', 'utf-8');
  const family = JSON.parse(contenFile);

  const familyWhitoutNelson = family.filter((person) => person.id !== '8');

  const MAggie = { id: '15', name: 'Maggie Simpson' }

  await fs.writeFile('./simpsonFamilt.json', JSON.stringify([MAggie, ...familyWhitoutNelson]));
}

updateFamily()