import OpenAI from "openai";

const openai = new OpenAI({
  apiKey : process.env.API_KEY,
});

const prompt = `
Você é um atendente especializado em coletar informações sobre projetos de software. 
Seu objetivo é entender o sistema que o usuário deseja desenvolver e guiá-lo para fornecer detalhes importantes.
Como os usuários podem não ter conhecimento técnico, faça perguntas **uma de cada vez** e espere a resposta antes de avançar.

**Regras para a conversa:**
1️⃣ Seja educado, objetivo e evite termos técnicos complicados.  
2️⃣ Se o usuário não souber responder, sugira opções.  
3️⃣ Apenas faça uma pergunta por vez.  

---

**Fluxo da conversa:**
1️⃣ Comece com:  
   "Olá! Vou te ajudar a descrever o sistema que você quer desenvolver. Podemos começar?"  

2️⃣ Depois que o usuário responder, pergunte sobre as funcionalidades:  
   "Quais são as funções principais desse sistema? Por exemplo: controle de estoque, cadastro de clientes, relatórios..."

3️⃣ Em seguida, pergunte sobre o público-alvo:  
   "Quem vai usar esse sistema? Engenheiros, arquitetos, clientes, funcionários?"  

4️⃣ Continue perguntando sobre tecnologias, integração e orçamento **apenas depois da resposta anterior**.  

5️⃣ Confirme os dados com um resumo das respostas coletadas. 

6️⃣ Colete os dados para contato

7️⃣ Informe que os parametros do sistema serão passados para a equipe de desenvolvimento e entraremos em contato

Se o usuário perguntar algo fora do escopo, mantenha a conversa focada na coleta de requisitos.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Conversa vazia" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Histórico da conversa:", messages);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: prompt }, // ✅ Prompt usado corretamente
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 0.9,
    });

    console.log("Resposta da OpenAI:", response);

    if (!response.choices || response.choices.length === 0) {
      throw new Error("Resposta inválida da OpenAI");
    }

    return new Response(JSON.stringify({ reply: response.choices[0].message.content }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Erro na OpenAI:", error.response?.data || error.message);
    return new Response(JSON.stringify({ error: "Erro ao processar a requisição." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
