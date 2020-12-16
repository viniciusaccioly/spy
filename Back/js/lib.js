const util = require('util');

const exec = util.promisify(require('child_process').exec);

async function getSnmp(ip) {

  console.log("Solicitando info de: ",ip)
  const {stdout} = await exec(`script.sh ${ip}`)
  const listaDados = stdout.split(' ')
  console.log(listaDados)
  return listaDados;
}


module.exports = {getSnmp}