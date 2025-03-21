import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: 'key_JZvhMO2VLFGfeF2M',
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  try {
    console.log("Mensagem recebida:", message);

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "system", content: "Você é um assistente técnico para coletar requisitos de sistemas."}, { role: "user", content: message }]
    });

    console.log("Resposta da OpenAI:", response.data);

    if (!response.data.choices || response.data.choices.length === 0) {
      throw new Error("Resposta inválida da OpenAI");
    }

    res.status(200).json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Erro na OpenAI:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao processar a requisição." });
  }
}
