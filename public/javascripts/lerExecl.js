const readexecl = require('read-excel-file/node');
const fs = require('fs');

// Read the Excel file
readexecl(fs.createReadStream("customerdalesdetail.xlsx")).then((rows) => {

    // add all the rows into one array this is the order of the rows NIF	Nome	Data	Tipo	Número	Cod.	Descrição	Quantidade	Valor líquido	Valor	IVA	Moeda original	Taxa de câmbio	Valor líquido na moeda original	Valor na moeda original	IVA na moeda original	% de IVA	País/Região	Mercado
    let customers = [];
    
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const customer = {
            NIF: row[0],
            Nome: row[1],
            Data: row[2],
            Tipo: row[3],
            Numero: row[4],
            Cod: row[5],
            Descricao: row[6],
            Quantidade: row[7],
            ValorLiquido: row[8],
            Valor: row[9],
            IVA: row[10],
            MoedaOriginal: row[11],
            TaxaCambio: row[12],
            ValorLiquidoMoedaOriginal: row[13],
            ValorMoedaOriginal: row[14],
            IVAMoedaOriginal: row[15],
            PercentagemIVA: row[16],
            PaisRegiao: row[17],
            Mercado: row[18]
        };
        customers.push(customer);
    }

    for(let i = 0; i < 3; i++) {
        const customer = customers[i];
        console.log(`NIF: ${customer.NIF}`);
        console.log(`Nome: ${customer.Nome}`);
        console.log(`Data: ${customer.Data}`);
        console.log(`Tipo: ${customer.Tipo}`);
        console.log(`Numero: ${customer.Numero}`);
        console.log(`Cod: ${customer.Cod}`);
        console.log(`Descricao: ${customer.Descricao}`);
        console.log(`Quantidade: ${customer.Quantidade}`);
        console.log(`ValorLiquido: ${customer.ValorLiquido}`);
        console.log(`Valor: ${customer.Valor}`);
        console.log(`IVA: ${customer.IVA}`);
        console.log(`MoedaOriginal: ${customer.MoedaOriginal}`);
        console.log(`TaxaCambio: ${customer.TaxaCambio}`);
        console.log(`ValorLiquidoMoedaOriginal: ${customer.ValorLiquidoMoedaOriginal}`);
        console.log(`ValorMoedaOriginal: ${customer.ValorMoedaOriginal}`);
        console.log(`IVAMoedaOriginal: ${customer.IVAMoedaOriginal}`);
        console.log(`PercentagemIVA: ${customer.PercentagemIVA}`);
        console.log(`PaisRegiao: ${customer.PaisRegiao}`);
        console.log(`Mercado: ${customer.Mercado}`);
        console.log('----------------------------------');
    }
});
