class calIMC{
    constructor(p,al){
        this.peso=p;
        this.altura=al;
    };
    calcular(){
        return this.peso/Math.pow(this.altura, 2);
    }
    tipoCategoria(imc){
        if(imc<18.5){
            return "Peso más bajo de lo ideal";
        }else if(imc>=18.5 && imc<25){
            return "Peso normal";
        }else if(imc>=25 && imc<30){
            return "Peso más elevado de lo ideal";
        }else{
            return "Obesidad";
        }
        
    }
    colocarImg(categoria){
        switch(categoria){
            case "Peso más bajo de lo ideal":
                return "images/bajo.png";
            case "Peso normal":
                return "images/normal.jpg";
            case "Peso más elevado de lo ideal":
                return "images/sobre.png";
            case "Obesidad":
                return "images/obesidad.png";
            default:
                return "";
             }
        }
    }
const boton=document.getElementById('btnCalcular');
const resultadoImc=document.getElementById('resultado');

boton.addEventListener('click', function(){
    const peso=parseFloat(document.getElementById('peso').value);
    const altura=parseFloat(document.getElementById('altura').value);
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultadoImc.innerHTML = "<p>Por favor, ingresa valores válidos.</p>";
        return;
}
const calculadora = new calIMC(peso, altura);
    const imc = calculadora.calcular().toFixed(2);
    const categoria = calculadora.tipoCategoria(imc);
    const imagen = calculadora.colocarImg(categoria);

    resultadoImc.innerHTML = `
        <h3>Tu IMC es: ${imc}</h3>
        <p>Categoría: <strong>${categoria}</strong></p>
        <img src="${imagen}" alt="${categoria}" style="width:150px; border-radius:10px; margin-top:10px;">
    `;
});