const frm = document.querySelector('form');

frm.addEventListener('submit', (e) => {
	e.preventDefault();

	const idade = frm.idade.value;

	const mensagem = verificarIdade(idade);

	alert(mensagem);

	frm.idade.value = '';
});

const verificarIdade = (idade) => {
	if (idade >= 18) {
		return 'É maior de idade';
	} else {
		return 'Não é maior de idade';
	}
};
