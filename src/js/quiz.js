document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const questions = [
        {
            question: "Qual é a principal causa natural de enchentes?",
            answers: {
                a: "Terremotos",
                b: "Chuvas intensas prolongadas",
                c: "Erupções vulcânicas",
                d: "Secas"
            },
            correctAnswer: "b",
            explanation: "As chuvas intensas e prolongadas são a principal causa natural de enchentes, pois satura o solo e aumenta o volume dos rios."
        },
        {
            question: "Qual fator humano contribui significativamente para enchentes urbanas?",
            answers: {
                a: "Impermeabilização do solo",
                b: "Plantio de árvores",
                c: "Construção de parques",
                d: "Uso de energia solar"
            },
            correctAnswer: "a",
            explanation: "A impermeabilização do solo com asfalto e concreto impede a absorção da água da chuva, aumentando o escoamento superficial."
        },
        {
            question: "O que é um 'plano de contingência' contra enchentes?",
            answers: {
                a: "Um mapa turístico da cidade",
                b: "Um conjunto de ações preventivas e emergenciais",
                c: "Um registro histórico de chuvas",
                d: "Um tipo de seguro residencial"
            },
            correctAnswer: "b",
            explanation: "O plano de contingência é um documento que estabelece ações preventivas e medidas emergenciais para reduzir os impactos das enchentes."
        },
        {
            question: "Qual desses itens NÃO deve fazer parte de um kit de emergência para enchentes?",
            answers: {
                a: "Água potável",
                b: "Documentos importantes",
                c: "Velas acesas",
                d: "Remédios essenciais"
            },
            correctAnswer: "c",
            explanation: "Velas acesas são perigosas em situações de enchente devido ao risco de vazamento de gás. Use lanternas a pilha."
        },
        {
            question: "O que significa a expressão 'área de várzea'?",
            answers: {
                a: "Região montanhosa",
                b: "Terreno próximo a rios que alaga naturalmente",
                c: "Área desértica",
                d: "Zona industrial"
            },
            correctAnswer: "b",
            explanation: "Várzeas são áreas planas próximas a rios que naturalmente alagam durante períodos de cheia, funcionando como amortecimento."
        },
        {
            question: "Qual é a principal recomendação ao perceber que uma enchente está começando?",
            answers: {
                a: "Ficar em locais elevados",
                b: "Dirigir rapidamente para atravessar áreas alagadas",
                c: "Permanecer no porão da casa",
                d: "Esperar a água chegar para tomar providências"
            },
            correctAnswer: "a",
            explanation: "Deve-se procurar locais elevados imediatamente, pois enchentes podem subir rapidamente e tornar rotas de fuga perigosas."
        },
        {
            question: "Qual dessas construções ajuda a prevenir enchentes?",
            answers: {
                a: "Piscinões",
                b: "Muros altos sem drenagem",
                c: "Aterros em várzeas",
                d: "Loteamentos em encostas"
            },
            correctAnswer: "a",
            explanation: "Piscinões são grandes reservatórios que armazenam temporariamente a água da chuva, reduzindo o volume que vai para os rios."
        },
        {
            question: "Por que é perigoso dirigir em ruas alagadas?",
            answers: {
                a: "A água pode danificar o motor do carro",
                b: "Pode haver correntezas fortes ou buracos ocultos",
                c: "O veículo pode perder tração e ser arrastado",
                d: "Todas as alternativas anteriores"
            },
            correctAnswer: "d",
            explanation: "Dirigir em áreas alagadas é extremamente perigoso por todos esses motivos, podendo levar a acidentes fatais."
        },
        {
            question: "O que são 'parques lineares' em relação à prevenção de enchentes?",
            answers: {
                a: "Áreas de lazer ao longo de rios que funcionam como zonas de amortecimento",
                b: "Estacionamentos longos",
                c: "Rodovias à beira-rio",
                d: "Cercas de divisa de propriedades"
            },
            correctAnswer: "a",
            explanation: "Parques lineares são áreas verdes ao longo de cursos d'água que permitem a expansão natural dos rios durante cheias."
        },
        {
            question: "Qual órgão emite alertas de enchentes no Brasil?",
            answers: {
                a: "INMET (Instituto Nacional de Meteorologia)",
                b: "CEMADEN (Centro Nacional de Monitoramento e Alertas de Desastres Naturais)",
                c: "Defesa Civil",
                d: "Todos os anteriores"
            },
            correctAnswer: "d",
            explanation: "Todos esses órgãos trabalham em conjunto para monitorar e emitir alertas sobre riscos de enchentes em diferentes regiões do país."
        }
    ];

    function buildQuiz(){
        const output = [];

        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            
            for(const letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter.toUpperCase()}) ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            
            output.push(
                `<div class="question">
                    <h3>${questionNumber + 1}. ${currentQuestion.question}</h3>
                    <div class="answers">${answers.join('')}</div>
                </div>`
            );
        });
        
        quizContainer.innerHTML = output.join('');
    }

    function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        let resultsOutput = '<h3>Resultado</h3>';
        
        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            
            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainer.classList.add('correct');
                answerContainer.classList.remove('incorrect');
            } else {
                answerContainer.classList.add('incorrect');
                answerContainer.classList.remove('correct');
            }
            
            // Adiciona explicação para cada questão
            resultsOutput += `
                <div class="question-result">
                    <p><strong>Questão ${questionNumber + 1}:</strong> ${currentQuestion.question}</p>
                    <p class="${userAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}">
                        Sua resposta: ${userAnswer ? currentQuestion.answers[userAnswer] : 'Não respondida'}
                    </p>
                    <p class="correct">Resposta correta: ${currentQuestion.answers[currentQuestion.correctAnswer]}</p>
                    <p class="explanation">${currentQuestion.explanation}</p>
                </div>
                <hr>
            `;
        });
        
        resultsOutput = `
            <h3>Você acertou ${numCorrect} de ${questions.length} questões!</h3>
            <p>${getPerformanceMessage(numCorrect, questions.length)}</p>
            ${resultsOutput}
        `;
        
        resultsContainer.innerHTML = resultsOutput;
        resultsContainer.style.display = 'block';
        submitButton.disabled = true;
    }

    function getPerformanceMessage(correct, total) {
        const percentage = (correct / total) * 100;
        
        if(percentage >= 80) {
            return 'Excelente! Você demonstra bom conhecimento sobre enchentes e prevenção.';
        } else if(percentage >= 60) {
            return 'Bom trabalho! Você sabe bastante, mas pode aprender mais sobre o assunto.';
        } else if(percentage >= 40) {
            return 'Não foi mal! Recomendamos estudar mais sobre prevenção de enchentes.';
        } else {
            return 'Este resultado mostra que é importante aprender mais sobre enchentes para sua segurança.';
        }
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});