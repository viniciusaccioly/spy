async function GetDados(ip) {
  console.log(ip);
  const res = await fetch(`http://localhost:3000/ip/"${ip}"`);
  //let lista = ["123","123"]
  return await res.json();
}

export default GetDados;
