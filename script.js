function porcentage(completo, parte) {
    return completo * (parte / 100);
}

function nomina(horasExtraNormales, horasExtraFestivas, nocturnidad, plusFundicion, guardias, irpf) {
    // Variables fijas
    const salarioBase = 1926.24;
    const mejoraVoluntaria = 100;

    // Multiplicar variables manuales
    horasExtraNormales *= 17;
    horasExtraFestivas *= 21;
    guardias *= 100;
    plusFundicion *= 7.38;
    nocturnidad *= 20;

    // Calcular Importe Total
    const importeTotal = salarioBase + mejoraVoluntaria + horasExtraFestivas + horasExtraNormales + nocturnidad + plusFundicion + guardias;

    // Porcentages
    const prorrataPagas = 331.9;
    const totalCotizacion = salarioBase + mejoraVoluntaria + guardias + plusFundicion + nocturnidad + prorrataPagas;
    const regulacionGeneral = porcentage(totalCotizacion, 4.82);
    const paroFp = porcentage(totalCotizacion, 1.65);
    const horasExtras = horasExtraFestivas + horasExtraNormales;
    const deduccionHorasExtras = porcentage(horasExtras, 4.7);
    const deduccionIrpf = porcentage(importeTotal, irpf);
    const totalDeducciones = regulacionGeneral + paroFp + deduccionHorasExtras + deduccionIrpf;

    const liquidoPercibir = importeTotal - totalDeducciones;
    return liquidoPercibir;
}

function performOperation(operation) {
    const horasExtraNormales = parseFloat(document.getElementById('extras-normales').value) || 0;
    const horasExtraFestivas = parseFloat(document.getElementById('extras-festivas').value) || 0;
    const nocturnidad = parseFloat(document.getElementById('nocturnidad').value) || 0;
    const plusFundicion = parseFloat(document.getElementById('plus-fundicion').value) || 0;
    const guardias = parseFloat(document.getElementById('guardias').value) || 0;
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;

    const result = nomina(horasExtraNormales, horasExtraFestivas, nocturnidad, plusFundicion, guardias, irpf);
    document.getElementById('resultado').textContent = 'Líquido a percibir: ' + result.toFixed(2) + '€';
}