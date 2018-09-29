
var temperatura={

	conversor: function convertir (num,unidadAconvertir,unidadQueQuiero,tipoDeMedida){


		if (unidadAconvertir=='m' &&  unidadQueQuiero =='cm' && tipoDeMedida=='L') {
			num=num*100;
			console.log(num);
		}

		if (unidadAconvertir=='km' &&  unidadQueQuiero =='m' && tipoDeMedida=='L') {
			num=num*1000;
			console.log(num);
		}

		if (unidadAconvertir=='p' &&  unidadQueQuiero =='m' && tipoDeMedida=='L') {
			num=num/3.2808;
			console.log(num);
		}

		if (unidadAconvertir=='c' &&  unidadQueQuiero =='f' && tipoDeMedida=='T') {
			num=num*1.8+32;
			console.log(num);
		}

		if (unidadAconvertir=='k' &&  unidadQueQuiero =='f' && tipoDeMedida=='T') {
			num=num-273.15 * 1.8000 + 32.00;
			console.log(num);	
		}

		if (unidadAconvertir=='k' &&  unidadQueQuiero =='c' && tipoDeMedida=='T') {}
			num =num- 273.15;
	}

}