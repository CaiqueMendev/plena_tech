import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "185.239.210.52",
  user: "u100434773_plenatech_user",
  password: "&5Z08>=iH",
  database: "u100434773_plenatech",
})

export async function POST(req: Request) {
  
    try {
      const { nome, email, mensagem } = await req.json();

      if (!nome || !email || !mensagem) {
        return NextResponse.json({ error: "Todos os campos são obrigatórios." });
      }

      const query = "INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)";
      const values = [nome, email, mensagem];

      const [result] = await db.execute(query, values);

      return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (error) {
      console.error("Erro ao salvar no banco:", error);
      return NextResponse.json({ error: "Erro ao salvar os dados." }, { status: 500 });
    }
  

}