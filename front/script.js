import pc from './pcs.js'
const ip=document.querySelector('#pesquisaIP')
const searchbtn=document.querySelector('#searchbtn')
const hide=document.getElementById('hide')

hide.style.display = "none"


function createDados(){
    const dados=document.querySelector('.table-dados tbody')
    dados.innerHTML= ''
    const pc1=pc(ip.value)
    const dadosLista=`<tr><td>${pc1[0].hostname}</td><td>${pc1[0].ip}</td><td>${pc1[0].mask}</td></tr>`  
    dados.insertAdjacentHTML('beforeend',dadosLista)
}

function createCPU(){
    const dados=document.querySelector('.table-cpu tbody')
    dados.innerHTML= ''
    const pc1=pc(ip.value)
    const dadosLista=`<tr><td>${pc1[1].cpu}</td><td>${pc1[1].cpuclock}</td><td>${pc1[1].cputemp}</td></tr>`
    dados.insertAdjacentHTML('beforeend',dadosLista)

}

function createHD(){
    const dados=document.querySelector('.table-hd tbody')
    dados.innerHTML= ''
    const pc1=pc(ip.value)
    const dadosLista=`<tr><td>${pc1[2].hdtotal}</td><td>${pc1[2].hduso}</td><td>${pc1[2].hdtemp}</td></tr>`
    dados.insertAdjacentHTML('beforeend',dadosLista)

}

function createMem(){
    const dados=document.querySelector('.table-mem tbody')
    dados.innerHTML= ''
    const pc1=pc(ip.value)
    const dadosLista=`<tr><td>${pc1[3].memuso}</td><td>${pc1[3].memclock}</td><td>${pc1[3].memtemp}</td></tr>`
    dados.insertAdjacentHTML('beforeend',dadosLista)

}

function load(){
    searchbtn.addEventListener('click', () =>{
        hide.style.display = ""
        createDados(ip)
        createCPU(ip)
        createHD(ip)
        createMem(ip)
    })

}
load()
//pc1=(pc("192.168.1.1"))
//console.log(pc1[0].cputemp)
//console.log("1")
