// -- EXERCICÍCO 1 --

function verificarPrimo(numero) {

    // Se o número for menor que 2, não é primo
    if (numero < 2) {
        return false;
    }

    // Verificar se o número é divisível por algum outro número
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            // Se for divisível, não é primo
            return false;
        }
    }

    // Se o número não for divisível por nenhum outro número, é primo
    return true;
}

// Listar todos os números primos entre 1 e 1000
for (let i = 1; i <= 1000; i++) {
    if (verificarPrimo(i)) {
        console.log(i);
    }
}





// -- EXERCÍCIO 2 --

function senhaValida(password) {
    // Verifica se a senha possui pelo menos 8 caracteres
    if (password.length < 8) {
        return false;
    }

    // Verifica se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber;
}

// Exemplo na prática:

console.log(senhaValida("Otavio100"));   // true
console.log(senhaValida("senha"));   // false (não tem letra maiúscula e nem número)





// -- EXERCÍCIO 3 --

function calcularFatorial(numero) {

    // Verifica se o número é igual a 0 ou 1
    if (numero === 0 || numero === 1) {
        return 1; // O fatorial de 0 e 1 é 1
    } else {
        let fatorial = 1; // Inicializa a variável fatorial como 1

        // Itera de 2 até o número informado
        for (let i = 2; i <= numero; i++) {
            fatorial *= i; // Multiplica o valor atual de fatorial pelo valor de i
        }

        return fatorial; // Retorna o resultado do fatorial
    }
}

// Calcular os fatoriais de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é: ${calcularFatorial(i)}`);
}






// -- EXERCÍCIO 4 --

function verificarQuadradoPerfeito(numero) {
    // Verificar se o número é negativo
    if (numero < 0) {
        return false;
    }

    // Calcular a raiz quadrada do número
    const raizQuadrada = Math.sqrt(numero);

    // Verificar se a raiz quadrada é um número inteiro
    if (Number.isInteger(raizQuadrada)) {
        return true;
    } else {
        return false;
    }
}

// Exemplo na prática:

console.log(verificarQuadradoPerfeito(25));    // true 
console.log(verificarQuadradoPerfeito(20));    // false 