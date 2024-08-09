// VALIDAR ACESSO EM TELA DE LOGIN
 
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}

var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').
    value;
 
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById('nomeUser').
    value = "";
    }else{
        alert('Favor informar o nome para cadastro');
    }
}

// FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
   
    if(nomeUser){
        dadosLista.push(nomeUser);
      //console.log(dadosLista);
      criarlista()
        document.getElementById('nomeUser').value = "";
    }else{
        alert('Favor informar o nome para cadastro');
    }
}
 
// FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
   
    if(nomeUser){
        dadosLista.push(nomeUser);
      //console.log(dadosLista);
      criarlista()
        document.getElementById('nomeUser').value = "";
    }else{
        alert('Favor informar o nome para cadastro');
    }
}
 
// FUNÇÃO PARA CRIAR LISTA
 
function criarlista(){
    let tabela = document.getElementById ('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>"
    for(let i = 0; i <= (dadosLista.length-1) ; i++){
        // 1 é usado 
        tabela += "<tr><td>" + dadosLista [i] + "</td><td> <button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir </button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}


// FUNÇÃO PARA EDITAR NOMES DA LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}


// FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i){
  // COMENTARIO SOBRE SPLICE 
  // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
  dadosLista.splice((i-1), 1);
  document.getElementById('tabela').deleteRow(i);
  document.getElementById('nomeUser').value = "";
}
