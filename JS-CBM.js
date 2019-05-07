//class
//A lógica da fórmula se trata da utilização de uma função para calcúlar a 
//posição de um ícone em cima de uma imagem de um triángulo de "Função de Time"
//de acordo com os valores de 0 a 10 que este personagem possui nos 3 quesitos
//principáis para definir qual seria a melhor posição para este personagem jogar.

function DefineRolePyramid (dps, tank, utility, elementIcon) {
	var pos = {X:100,Y:0};
	var dpsX = dps*-10;
	var utilityX = utility*10;
	if (dps > utility) {
		var tankX = tank*5;
	} else if (dps == utility) {
		var tankX = 0;
	} else {
		var tankX = tank*-5;
	};
	if (dps > 0 && utility > 0) {
		var deltaY = (tank*20)/(dps*1.50+utility*1.50);
	} else if (dps > 0) {
		var deltaY = (tank*20)/(dps*3);
	} else if (utility > 0) {
		var deltaY = (tank*20)/(utility*3);
	} else {
		var deltaY = (tank*20)/(1);
	};
	
	pos["X"] = pos["X"]+dpsX+utilityX+tankX;
	pos["Y"] = pos["Y"]+deltaY;
}