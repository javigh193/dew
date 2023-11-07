class Edificio {
    constructor(calle, numero, cp) {
       this.calle = calle;
       this.numero = numero;
       this.codigo_postal = cp;
       this.plantas = [];
       console.log(`Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${this.codigo_postal}`);
    }
    agregarPlantasYPuertas(numplantas, puertas) {
        for (let i=0; i < numplantas; i++) {
            let planta = []
            for (let i=0; i < puertas; i++) {
                planta.push(null); //null indicará piso sin propietario
            }
            this.plantas.push(planta);
        }
    }
    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta - 1][puerta - 1] = nombre;
        console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}`)
    }
    modificarNumero(numero) {
        this.numero = numero;
    }
    modificarCalle(calle) {
        this.calle = calle;
    }
    modificarCodigoPostal(codigo) {
        this.codigo_postal = codigo;
    }
    imprimeCalle() {
        console.log(`La calle del edificio es: ${this.calle}`);
    }
    imprimeNumero() {
        console.log(`El número del edificio es: ${this.numero}`);
    }
    imprimeCodigoPostal() {
        console.log(`El código postal del edificio es: ${this.codigo_postal}`);
    }
    imprimePlantas() {
        this.plantas.forEach( planta => {
            planta.forEach( piso => {
                console.log(piso);
            });
        });
    }
}
