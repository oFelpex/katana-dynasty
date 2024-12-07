const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "../db.json"); // Caminho para o db.json
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  // Retorna apenas as katanas do db.json
  res.status(200).json(data["cursed-katanas"]);
}
