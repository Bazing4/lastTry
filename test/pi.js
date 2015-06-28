var PI = require( "../app/pi.js" )();
var soma3 = require("../app/pi.js")();
var expect = require( 'chai' ).expect;

describe( "PI", function() {

    
    describe( "somaDoisNumeros", function() {
        it( "Deveria retornar 5 ao somar 2 + 3", function(){
            var valorEsperado = 5;    
            var valorRetornado = PI.somaDoisNumeros( 2, 3 );
            expect( valorEsperado ).to.equal( valorRetornado );
        });
    }); 
});

describe( "PI", function() {

    
    describe( "somaTresNumeros", function() {
        it( "Deveria retornar 6 ao somar 2 + 2 + 2", function(){
            var valorEsperado = 6;    
            var valorRetornado = soma3.somaTresNumeros( 2, 2, 2 );
            expect( valorEsperado ).to.equal( valorRetornado );
        });
    }); 
});

