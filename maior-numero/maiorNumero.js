const frm = document.querySelector('form');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const n1 = Number(frm.n1.value);
	const n2 = Number(frm.n2.value);
	const n3 = Number(frm.n3.value);

	const maiorNumero = calcularMaiorNumero(n1, n2, n3);
	alert(maiorNumero);

	frm.n1.value = '';
	frm.n2.value = '';
	frm.n3.value = '';
});

const calcularMaiorNumero = (n1, n2, n3) => {
	let maior = 0;

	if (n1 >= n2 && n1 >= n3) {
		maior = n1;
	} else if (n2 >= n1 && n2 >= n3) {
		maior = n2;
	} else {
		maior = n3;
	}
	return maior;
};
