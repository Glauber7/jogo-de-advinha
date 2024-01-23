function bet(choice) {
    const machineNumber = Math.floor(Math.random() * 99) + 1;
    const userWins = (choice === 'menor' && machineNumber < 100) || (choice === 'maior' && machineNumber >= 100);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Número da Máquina: ${machineNumber}. Você ${userWins ? `ganhou` : `perdeu`}!`;
}