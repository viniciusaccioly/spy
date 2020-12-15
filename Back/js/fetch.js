const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const top = require('./lib');


const port = 3000;
  app.get('/ip/:ip', async (req, res) => {
    const valor = await (req.params.ip)

    const topOutput = await top.raw(valor);

  console.log("Exibindo OIDs")
  res.json(topOutput);
  
  
});

app.listen(port, () => {
  console.log(`SNMP App at http://localhost:${port}`);
});
app.listen()