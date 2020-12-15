const api = "http://localhost:3000/";

async function executa() {
  const res = await fetch(`${api}`);

  return await res.json();
}
