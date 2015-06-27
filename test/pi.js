var PI = require( "../app/pi.js" )();
var expect = require( 'chai' ).expect;

describe( "PI", function() {

    
    describe( "somaDoisNumeros", function() {
        it( "Deveria retornar 4 ao somar 2 + 2", function(){
            var valorEsperado = 4;    
            var valorRetornado = PI.somaDoisNumeros( 2, 2 );
            expect( valorEsperado ).to.equal( valorRetornado );
        });
    }); 
   
});