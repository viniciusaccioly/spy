import pc from "./pcs.js";
import GetDados from "../../Back/js/index.js"

const ip = document.querySelector("#pesquisaIP");
const searchbtn = document.querySelector("#searchbtn");
const hide = document.getElementById("hide");
const notf = document.getElementById("notf");

hide.style.display = "none";

function createDados(dados1) {
  const dados = document.querySelector(".table-dados tbody");
  dados.innerHTML = "";
  const dadosLista = `<tr><td>${ip.value}</td><td>${dados1[7]}</td><td>${dados1[6]}</td></tr>`;
  dados.insertAdjacentHTML("beforeend", dadosLista);
}

function createCPU(dados1) {
  const dados = document.querySelector(".table-cpu tbody");
  dados.innerHTML = "";
  var cpu = dados1[5].replace('"',"")
  cpu = cpu.replace('"',"")
  const dadosLista = `<tr><td>${cpu*100}%</td></tr>`;
  dados.insertAdjacentHTML("beforeend", dadosLista);
}

function createHD(dados1) {
  const dados = document.querySelector(".table-hd tbody");
  dados.innerHTML = "";
  //const pc1 = pc(ip.value);
  const dadosLista = `<tr><td>${dados1[0]}</td><td>${dados1[1]}</td><td>${dados1[2]}</td></tr>`;
  dados.insertAdjacentHTML("beforeend", dadosLista);
}

function createMem(dados1) {
  const dados = document.querySelector(".table-mem tbody");
  dados.innerHTML = "";
  //const pc1 = pc(ip.value);
  const dadosLista = `<tr><td>${dados1[3]}</td><td>${dados1[4]}</td></tr>`;
  dados.insertAdjacentHTML("beforeend", dadosLista);
}

function createNet() {
  const dados = document.querySelector(".table-net tbody");
  dados.innerHTML = "";
  const pc1 = pc(ip.value);
  const dadosLista = `<tr><td>${pc1[4].netint}</td><td>${pc1[4].netip}</td><td>${pc1[4].netstatus}</td></tr>`;
  dados.insertAdjacentHTML("beforeend", dadosLista);
}

function ValidateIPaddress(ipaddress) {  
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
    return (true)  
  }  
  return (false)  
}  


function Timeout(text="", tempo=2000){
  notf.insertAdjacentHTML("beforeend", `${text}`);
      setTimeout(() => {
        notf.innerHTML = "";
      }, tempo);
}

async function load() {
  searchbtn.addEventListener("click", async () => {
    hide.style.display = "none";
    if (ValidateIPaddress(String(ip.value)) == false){
      Timeout("IP inválido")
      hide.style.display = "none";
    } else {
      Timeout("Procurando IP") 
      const data= await GetDados(ip.value)
      hide.style.display = "";
      if (data.length == 1){
        hide.style.display = "none";
        Timeout("IP não encontrado",5000)
      }
      //const dadosHD=GetDados(ip)
      createDados(data);
      createCPU(data);
      createHD(data);
      createMem(data);
      //createNet(ip);
    }
  });
}
load();


  