module.exports = function() { 

var PI = {
        somaDoisNumeros : function( num1, num2 ){
			return Number(num1) + Number(num2);
		},

        diminuir10: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
        },      
        
                diminuir9: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
        },  
                diminuir8: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
        },  
            };
return PI;
};
