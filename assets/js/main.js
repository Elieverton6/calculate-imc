const txtPeso = document.getElementById("txtpeso");
const txtAltura = document.getElementById("txtaltura");
const txtRes = document.getElementById("txtres");
const calcImc = document.getElementById("calcularImc");

calcImc.addEventListener('click', () => {
    const resultadoImc = () => {
        const resultado = txtPeso.value / (txtAltura.value * txtAltura.value);
        txtRes.style.background = "rgb(9, 206, 19)";

        if(resultado < 18.5) {
            txtRes.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Abaixo do peso)`;
        } else if(resultado >= 18.5 && resultado <= 24.9) {
            txtRes.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Peso normal)`;
        } else if(resultado >= 25 && resultado <= 29.9) {
            txtRes.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Sobrepeso)`;;
        } else if(resultado >= 30 && resultado <= 34.9) {
            txtRes.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 1)`;
        } else if(resultado >= 35 && resultado <= 39.9) {
            txtRes.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 2)`;
        } else {
            txtRes.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 3)`;
        }
    }

    if(txtPeso.value.length == 0) {
        txtRes.innerHTML = "Peso inválido!";
        txtRes.style.background = "rgb(223, 78, 78)";
        console.log("Peso Inválido!");
    } else if (txtAltura.value.length == 0) {
        txtRes.innerHTML = "Altura inválida!";
        txtRes.style.background = "rgb(223, 78, 78)";
        console.log("Altura Inválida!");
    } else {
        return resultadoImc();
    }

    txtRes.style.display = "block";
});