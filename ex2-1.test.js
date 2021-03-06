const flux = require("./ex2-1");

describe('Check flux calculator against specifications', function () {
    //Input variables
    //Numeric variables
    let b, c, d;
    //Numeric array
    let a = [];

    
    test('It is only worth calculating if b and d are non-zero.', function () {
        a = null;
        b = 0;
        c = null;
        d = 0;
  
        expect(flux.calculateFlux(a, b, c, d)).toBe(0);
    });

    test('We are screwed (infinite flux) if c is non-zero while the array, a, is empty.',function () {
        a = [];
        b = null;
        c = 1;
        d = null;
  
        expect(flux.calculateFlux(a, b, c, d)).toBe(Infinity);
    });

    test('The third value in the array (if given) sets the flux to be at lest 42 but no more than 69, switch - case 0.',function () {
        a = [0, 0, 0];
        b = null;
        c = null;
        d = null;
        let text = "";
        //Iterated tests a 100 times to cover Math.random() when switch - case 0 is used
        for (let i = 0; i < 100; i++){
            let fluxCalc = flux.calculateFlux(a, b, c, d);
            text += fluxCalc + ", ";  
            expect(fluxCalc).toBeGreaterThanOrEqual(42);
            expect(fluxCalc).toBeLessThanOrEqual(53);
        }
        console.log("Flux calculation results switch position 0: " + text);
    });
    
    test('The third value in the array (if given) sets the flux to be at lest 42 but no more than 69, switch - case 1.',function () {
        a = [0, 0, 1];
        b = null;
        c = null;
        d = null;
        let text = "";
        //Iterated tests a 100 times to cover Math.random() when switch - case 1 is used
        for (let i = 0; i < 100; i++){
            let fluxCalc = flux.calculateFlux(a, b, c, d);
            text += fluxCalc + ", ";
            expect(fluxCalc).toBeGreaterThanOrEqual(42);
            expect(fluxCalc).toBeLessThanOrEqual(45);
        }
        console.log("Flux calculation results switch position 1: " + text);
    });

    test('The third value in the array (if given) sets the flux to be at lest 42 but no more than 69, switch - case 12.',function () {
        a = [0, 0, 12];
        b = null;
        c = null;
        d = null;
        let text = "";
        //Iterated tests a 100 times to cover Math.random() when switch - case 1 is used
        for (let i = 0; i < 100; i++){
            let fluxCalc = flux.calculateFlux(a, b, c, d);
            text += fluxCalc + ", ";
            expect(fluxCalc).toBeGreaterThanOrEqual(42);
            expect(fluxCalc).toBeLessThanOrEqual(69);
        }
        console.log("Flux calculation results switch position 12: " + text);
    });
    
    test('The third value in the array is not 0, 1 or 12 sets the flux to be 43, switch - default.',function () {
        a = [0, 0, undefined];
        b = null;
        c = null;
        d = null;
        let text = "";
        //Iterated tests a 98 times when switch - default is used
        for (let i = -50; i <= 50; i++){

            if ( i !== 0 && i !== 1 && i !== 12) {
                a[2] = i;
                text += a[2] + ", ";
                expect(flux.calculateFlux(a, b, c, d)).toBe(43);    
            }
            
        }
        console.log("Flux calculation results switch position default: 43. a.[2] value = " + text);
    });

    test('If the array only consists of a single value, the flux will be 12 times this value.',function () {
        a = [undefined];
        b = null;
        c = null;
        d = null;
        let text = "";
        //Iterated tests a 21 times with different value to a.[0]
        for (let i = -10; i <= 10; i++){
            a[0] = i;
            let fluxCalc = flux.calculateFlux(a, b, c, d);
            text += "\na.[0] = " + a[0] + " ger Flux = " + fluxCalc + ", ";
            expect(fluxCalc).toBe(i * 12);
           
        }
        console.log("Flux calculation results with a.[0] value " + text);
    });

    test("If we haven't been able to calculate the flux by now, the flux value should be c.",function () {
        a = [0, 0];
        b = null;
        c = undefined;
        d = null;
        let text = "";
        //Iterated tests a 21 times with different value to c
        for (let i = -10; i <= 10; i++){
            c = i;
            let fluxCalc = flux.calculateFlux(a, b, c, d);
            text += fluxCalc + ", ";
            expect(fluxCalc).toBe(i);
           
        }
        console.log("Flux calculation results with c value " + text);
    });
  });

describe ("Check with some combined cases", function (){
    //Input variables
    //Numeric variables
    let b, c, d;
    //Numeric array
    let a = [];

    test('It is only worth calculating if b and d are non-zero.', function () {
        a = [0, 0, 1];
        b = 0;
        c = 10;
        d = 0;

        expect(flux.calculateFlux(a, b, c, d)).toBe(0);
    });

    test('b and d are non-zero and array with 3 elements', function () {
        a = [0, 0, 1];
        b = 1;
        c = 10;
        d = 1;

        //Iterated tests a 100 times to cover Math.random() when switch - case 1 is used
        for (let i = 0; i < 100; i++){
            let fluxCalc = flux.calculateFlux(a, b, c, d);
            expect(fluxCalc).toBeGreaterThanOrEqual(42);
            expect(fluxCalc).toBeLessThanOrEqual(45);
        }
    });

    test('The array only holds one value', function () {
        a = [10];
        b = 10;
        c = 10;
        d = 10;

        expect(flux.calculateFlux(a, b, c, d)).toBe(120);
    });

    test('The flux equals value of c', function () {
        a = [10, 10];
        b = 10;
        c = -100;
        d = 10;

        expect(flux.calculateFlux(a, b, c, d)).toBe(-100);
    });

    test('Infinity flux!', function () {
        a = [];
        b = 10;
        c = 10;
        d = 10;

        expect(flux.calculateFlux(a, b, c, d)).toBe(Infinity);
    });
});