const botao = document.getElementById('botao');

//e = event
botao.addEventListener('click',(e)=>{
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if(nome && email){
        //cancelo a submissão do form feita pelo botão
        e.preventDefault();
        const dados = {
            nome : nome,
            email: email
        };

        //manter as chaves (valores à esquerda) do jeito que estão
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(dados)
        };

        //executar a chamada à API post do servidor
        fetch('http://localhost:3000/adicionar',options)
        .then(resposta =>{
           return resposta.json()
        }).then(respostaJson => {
            console.log(respostaJson);
            alert(respostaJson.mensagem);
        })
    }
});