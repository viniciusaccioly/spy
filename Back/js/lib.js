const util = require('util');

const exec = util.promisify(require('child_process').exec);

async function raw(j) {

  console.log("Solicitando info de: ",j)
  const {stdout} = await exec(`script.sh ${j}`)
  const listaDados = stdout.split(' ')
  console.log(listaDados)
  return listaDados;
}


module.exports = {raw}