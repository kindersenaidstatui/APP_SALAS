const API_URL = "http://10.0.2.2:8000/api";

export async function fazerLogin(email, senha) {
  const resposta = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  let dados = null;
  try {
    dados = await resposta.json();
  } catch {
    dados = null;
  }

  if (!resposta.ok || dados?.erro === "s") {
    const mensagem = dados?.mensagem || dados?.message || dados?.errors?.email?.[0] || "E-mail ou senha inválidos.";
    throw new Error(mensagem);
  }

  return dados;
}
