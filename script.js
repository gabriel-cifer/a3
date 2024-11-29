/* Reset básico de margens e preenchimento para garantir consistência entre os navegadores */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Definindo fonte padrão e fundo da página */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4; /* Cinza claro */
    color: #333;
    line-height: 1.6;
    display: flex;
}

/* Estilo da barra lateral */
#sidebar {
    width: 250px;
    background-color: #2c3e50; /* Azul escuro */
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 20px;
}

#sidebar nav a {
    display: block;
    color: white;
    padding: 15px;
    text-decoration: none;
    font-size: 1.1rem;
    text-align: center;
    border-bottom: 1px solid #34495e; /* Azul mais suave */
}

#sidebar nav a:hover {
    background-color: #34495e; /* Azul mais suave no hover */
}

/* Estilo do conteúdo principal */
#content {
    margin-left: 250px; /* Espaço para a barra lateral */
    padding: 20px;
    width: calc(100% - 250px);
}

/* Estilo do cabeçalho */
header {
    background-color: #2980b9; /* Azul médio */
    color: #fff;
    text-align: center;
    padding: 20px;
}

header h1 {
    font-size: 2.5rem;
}

/* Estilo das seções */
section {
    padding: 20px;
    margin: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

section h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #2c3e50; /* Azul escuro */
}

section p {
    font-size: 1.1rem;
    margin-bottom: 15px;
}

/* Layout da seção "Sobre Mim" com imagem à esquerda e texto à direita */
.sobre-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.image-container {
    flex: 1;
    padding-right: 20px;
}

.profile-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.text-container {
    flex: 2;
}

.text-container h2 {
    font-size: 2.2rem;
    color: #2980b9; /* Azul médio */
}

.text-container p {
    font-size: 1.1rem;
}

/* Estilo do botão de contato flutuante */
.contact-btn {
    position: fixed;
    bottom: 80px;
    right: 30px;
    background-color: #2980b9; /* Azul médio */
    color: white;
    border: none;
    padding: 15px 25px;
    font-size: 1.2rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

.contact-btn:hover {
    background-color: #3498db; /* Azul claro no hover */
}

/* Estilo do modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
    padding-top: 60px;
}

/* Conteúdo do modal */
.modal-content {
    background-color: #fff;
    margin: 5% auto;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    max-height: 80%;
    overflow-y: auto;
}

/* Estilo do botão de fechar (X) */
.close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 25px;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Estilo do formulário de contato */
form {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Espaço entre os elementos do formulário */
}

label {
    margin: 5px 0;
    font-weight: bold;
    color: #34495e; /* Azul mais escuro para o texto */
}

input, textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%; /* Garante que os campos ocuparam 100% da largura disponível */
}

textarea {
    resize: vertical;
}

input[type="submit"] {
    background-color: #2980b9; /* Azul médio */
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

input[type="submit"]:hover {
    background-color: #3498db; /* Azul claro no hover */
}

/* Estilo do rodapé */
footer {
    background-color: #2c3e50; /* Azul escuro */
    color: white;
    text-align: center;
    padding: 15px;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Estilo para dispositivos móveis */
@media screen and (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }

    section {
        margin: 10px;
    }

    .sobre-section {
        flex-direction: column;
        text-align: center;
    }

    .image-container {
        padding-right: 0;
        margin-bottom: 20px;
    }

    #content {
        margin-left: 0;
        width: 100%;
    }

    #sidebar {
        width: 200px;
    }

    /* Ajustes para o formulário */
    form {
        width: 90%; /* Dá um espaço adequado para os campos */
        margin: 0 auto; /* Centraliza o formulário */
    }

    input, textarea {
        font-size: 1rem; /* Ajusta o tamanho da fonte */
    }
}
