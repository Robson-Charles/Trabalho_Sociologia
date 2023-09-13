

// Criar uma variável para armazenar o índice da pergunta atual
// Criar um array de objetos com as perguntas, as opções e a resposta correta
var perguntas = [
    {
      pergunta: "De acordo com o artigo 24, todo ser humano tem direito a... ",
      opcoes: ['Repouso', 'Lazer', 'Trabalho', 'Ferias'],
      resposta: 0 // o índice da opção correta, começando em 0
    },
    {
      pergunta: 'Ninguem pode ser obrigado a fazer parte de uma...',
      opcoes: ['Seita', 'Empresa', 'Associação', 'Clube'],
      resposta: 2
    },
    {
      pergunta: 'Amaternidade e a infância tém direito a cuidados e assistências especiais. Todas as crianças Nascidas dentro ou fora do matrimônio, gozarão da mesma proteção...',
      opcoes: ['Publica', 'Social', 'Maternal', 'Parental'],
      resposta: 1
    }
  ];
  
 // Criar um array de objetos com as perguntas, as opções e a resposta correta

  
  // Criar uma variável para armazenar o índice da pergunta atual
  var indice = 0;
  
  // Criar uma variável para armazenar o número de acertos
  var acertos = 0;
  
  // Selecionar os elementos HTML que serão usados para mostrar o quiz
  var elementoPergunta = document.getElementById("pergunta");
  var elementoOpcoes = document.getElementById("opcoes");
  var elementoResultado = document.getElementById("resultado");
  var elementoProximo = document.getElementById("proximo");
  
  // Criar uma função para mostrar a pergunta e as opções na tela
  function mostrarPergunta() {
    // Obter a pergunta e as opções do array de perguntas pelo índice
    var pergunta = perguntas[indice].pergunta;
    var opcoes = perguntas[indice].opcoes;
  
    // Atribuir o texto da pergunta ao elemento HTML
    elementoPergunta.textContent = pergunta;
  
    // Limpar o conteúdo do elemento HTML das opções
    elementoOpcoes.innerHTML = "";
  
    // Criar um loop para percorrer as opções e criar os elementos HTML correspondentes
    for (var i = 0; i < opcoes.length; i++) {
      // Criar um elemento input do tipo radio com o nome "opcao" e o valor igual ao índice da opção
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "opcao";
      input.id = opcoes[i];
      input.value = i;
  
      // Criar um elemento label com o texto da opção
      var label = document.createElement("label");
      label.textContent = opcoes[i];
      label.value = i;
      label.htmlFor = opcoes[i];

  
      // Criar um elemento br para quebrar a linha
      var br = document.createElement("br");
  
      // Adicionar os elementos criados ao elemento HTML das opções
      elementoOpcoes.appendChild(input);
      elementoOpcoes.appendChild(label);
      elementoOpcoes.appendChild(br);
    }
  }
  
  // Criar uma função para verificar se a opção selecionada pelo usuário é a correta
  function verificarResposta() {
    // Obter a resposta correta do array de perguntas pelo índice
    var resposta = perguntas[indice].resposta;
  
    // Obter os elementos input do tipo radio com o nome "opcao"
    var opcoes = document.getElementsByName("opcao");
  
    // Criar uma variável para armazenar a opção selecionada pelo usuário
    var selecionada = null;
 
    // Criar um loop para percorrer as opções e verificar qual delas está marcada
    
    for (var i = 0; i < opcoes.length; i++) {
      if (opcoes[i].checked) {
        // Atribuir o valor da opção marcada à variável selecionada
        
        selecionada = opcoes[i].value;
        break; // interromper o loop se encontrar a opção marcada
      }
    }
  
    // Verificar se a variável selecionada não é nula (ou seja, se o usuário marcou alguma opção)
    if (selecionada != null) {
      // Comparar o valor da opção selecionada com o valor da resposta correta
      if (selecionada == resposta) {
        // Se forem iguais, incrementar o número de acertos em um
        acertos++;
        for (var i = 0; i < opcoes.length; i++) {
          opcoes[i].disabled = true
        }
        // Mostrar uma mensagem de parabéns no elemento HTML do resultado
        elementoResultado.textContent = "Parabéns, você acertou!";
        elementoResultado.style.color = "green";
        
         // mudar a cor do texto para verde
      } else {
        for (var i = 0; i < opcoes.length; i++) {
      opcoes[i].disabled = true
    }
        // Se forem diferentes, mostrar uma mensagem de erro no elemento HTML do resultado
        elementoResultado.textContent = "Que pena, você errou!";
        elementoResultado.style.color = "red"; // mudar a cor do texto para vermelho
      }
      // Habilitar o botão de próximo
      elementoProximo.disabled = false;
    } 
  }
  
  // Criar uma função para mostrar a próxima pergunta ou o resultado final
  function mostrarProximo() {
    // Incrementar o índice da pergunta em um
    indice++;
    
  
    // Verificar se o índice é menor que o tamanho do array de perguntas
    if (indice < perguntas.length) {
      // Se for menor, mostrar a próxima pergunta na tela
      mostrarPergunta();
      // Limpar o conteúdo do elemento HTML do resultado
      elementoResultado.textContent = "";
      // Desabilitar o botão de próximo
      elementoProximo.disabled = true;
    } else {
      // Se for maior ou igual, mostrar o resultado final na tela
      elementoPergunta.textContent = "Fim do quiz!";
      elementoOpcoes.innerHTML = "";
      elementoResultado.textContent = "Você acertou " + acertos + " de " + perguntas.length + " perguntas!";
      elementoProximo.style.display = "none"; // esconder o botão de próximo
    }
  }
  
  // Chamar a função mostrarPergunta pela primeira vez ao carregar a página
  mostrarPergunta();
  