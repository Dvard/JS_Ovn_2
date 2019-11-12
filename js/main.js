function lang_finder(lang, kodare) {
	switch (lang) {
		case "PHP":
			return kodare + ' kodar php';
		case 'JAVA':
			return kodare + ' är kock';
		case 'RUBY':
			return kodare + ' ruby';
		default:
			return kodare + ' kodar något annat';
	}
}

function uppgift1() {
	const x = 5;

	if (x <= 10) {
		return x + ' Är mindre eller lika stort som 10';
	}
}

function uppgift2() {
	const x = 5;
	return x + ' är ' + (x > 10 ? 'större' :  'mindre') + ' än 10';
}

function uppgift3() {
	const season = 'Sommar';
	const seasons = ['Vinter', 'Vår', 'Sommar', 'Höst'];

	for (let i = 0; i < seasons.length; i++) {
		if (seasons[i] === season) {
			return 'Årstiden är: ' + seasons[i];
		}
	}
}

function uppgift4() {
	const kodare = 'Kalle';
	const lang = '';

	return lang_finder(lang, kodare);
}

function uppgift5() {
	const x = 5;
	return x + ' är ' + (x > 2 && x < 10 ? '' : 'inte ') + 'större än 2 och mindre än 10';
}

function uppgift6() {
	const var_type = true;
	const message = 'datat är av typen: ';
	const types = {'string': 'teckensträng', 'number': 'nummer', 'boolean': 'boolesk'}
	return message + types[String(typeof(var_typ))];
}

function uppgift7() {
	const text = 'GNU GPL v.3';
	const message = 'Längden är ';

	if (text.length === 0) {
		return message + 0;
	}

	if (text.length >= 1 && text.length <= 3) {
		return message + 'mellan 1 och 3';
	}

	if (text.length >= 4 && text.length <= 10) {
		return message + 'mellan 4 och 10';
	}

	if (text.length > 10 && text.length < 20) {
		return message + 'mer än 10 men mindre än 20';
	}

	if (text.length > 20) {
		return message + 'mer än 20';
	}
}

const upgs = [
	uppgift1(),
	uppgift2(),
	uppgift3(),
	uppgift4(),
	uppgift5(),
	uppgift6(),
	uppgift7(),
];

for (let i = 0; i < upgs.length; i++) {
	console.log(upgs[i]);
}



