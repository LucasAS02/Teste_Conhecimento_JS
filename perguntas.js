const perguntas = [
    {
        pergunta: "[ADS 2023 - Estácio] Qual é a finalidade do comando 'console.log()' em JavaScript?",
        respostas: [
            "Exibir uma mensagem de erro.",
            "Imprimir dados no console.",
            "Criar uma variável.",
        ],
        correta: 1
    },
    {
        pergunta: "[ADS 2023 - Estácio] Qual é a função do operador '===' em comparações em JavaScript?",
        respostas: [
            "Comparação de valores sem considerar o tipo.",
            "Atribuição de valores.",
            "Comparação estrita de valores e tipos.",
        ],
        correta: 2
    },
    {
        pergunta: "[ADS 2023 - Estácio] Como se declara uma variável em JavaScript?",
        respostas: [
            "let myVar;",
            "const myVar = 10",
            "Ambas as opções estão corretas.",
        ],
        correta: 2
    },
    {
        pergunta: "[ADS 2023 - Estácio] O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de variável.",
            "Um tipo de bloco reutilizável.",
            "Criar uma variável.",
        ],
        correta: 1
    },
    {
        pergunta: "[ADS 2023 - Estácio] Como realizar um comentário em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->",
        ],
        correta: 0
    },
    {
        pergunta: "[ADS 2023 - Estácio] Qual é a função do operador " + " em JavaScript?",
        respostas: [
            "Aumentar o tamanho de uma fonte.",
            "Concatenar strings.",
            "Um tipo de variável.",
        ],
        correta: 1
    },
    {
        pergunta: "[ADS 2023 - Estácio] O que é um array em JavaScript?",
        respostas: [
            "Um tipo de operador aritmético.",
            "Uma estrutura de controle de fluxo.",
            "Uma coleção ordenada de elementos.",
        ],
        correta: 2
    },
    {
        pergunta: "[ADS 2023 - Estácio] O que é o evento onclick em JavaScript?",
        respostas: [
            "Um evento relacionado à carga da página.",
            "Um evento acionado quando um botão é clicado.",
            "Uma função que ocorre automaticamente.",
        ],
        correta: 1
    },
    {
        pergunta: "[ADS 2023 - Estácio] Como se realiza a criação de um objeto em JavaScript?",
        respostas: [
            "createObject({})",
            "new Object()",
            "{}",
        ],
        correta: 2
    },
    {
        pergunta: "[ADS 2023 - Estácio] Como se realiza a manipulação de classes em elementos HTML usando JavaScript?",
        respostas: [
            "element.addClass('minhaClasse')",
            "element.classList.add('minhaClasse')",
            "element.setAttribute('class', 'minhaClasse')",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}