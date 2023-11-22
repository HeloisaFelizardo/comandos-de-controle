document.addEventListener('DOMContentLoaded', function () {
	const resp = document.querySelector('h2');

	const somaMultiplos = (numero) => {
		let soma = 0;
		for (let i = 0; i < numero; i++) {
			if (i % 3 === 0 || i % 5 === 0) {
				soma += i;
			}
		}
		return soma;
	};

	const soma = somaMultiplos(1000);

	resp.innerText = `A soma dos múltiplos é: ${soma}`;
});
