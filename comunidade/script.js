// Array para armazenar as comunidades com links
let comunidades = [
    { nome: "Tech Innovators", link: "/comunidades/comunidades.html" },
    { nome: "Desenvolvedores Web", link: "/comunidades/comunidades.html" },
    { nome: "Jogadores de RPG", link: "/comunidades/comunidades.html" }
  ];
  
  // Função para atualizar o select com as comunidades
  function atualizarSelect() {
    const select = document.getElementById("comunidadeSelect");
    select.innerHTML = '<option value="">Escolha uma comunidade</option>'; // Limpar o select
  
    // Adicionar as comunidades ao select
    comunidades.forEach((comunidade) => {
      const option = document.createElement("option");
      option.value = comunidade.link;
      option.textContent = comunidade.nome;
      select.appendChild(option);
    });
  }
  
  // Função para criar uma nova comunidade
  function criarComunidade() {
    const novaComunidade = document.getElementById("novaComunidade").value.trim();
  
    if (novaComunidade !== "") {
      const link = novaComunidade.toLowerCase().replace(/\s+/g, '') + ".html"; // Gera um link simples baseado no nome
      comunidades.push({ nome: novaComunidade, link: link });
      document.getElementById("novaComunidade").value = ""; // Limpar o campo de entrada
      atualizarSelect(); // Atualizar a lista de opções
    } else {
      alert("Por favor, digite o nome de uma comunidade.");
    }
  }
  
  // Função para redirecionar para a página da comunidade
  function entrarNaComunidade() {
    const select = document.getElementById("comunidadeSelect");
    const linkSelecionado = select.value;
  
    if (linkSelecionado) {
      window.location.href = linkSelecionado; // Redireciona para a página da comunidade
    }
  }
  
  // Inicializar a página com as comunidades existentes
  atualizarSelect();
  
