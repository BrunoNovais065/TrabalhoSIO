const fs = require('fs');
const { DOMParser } = require('xmldom');

// Read the XML file
const xml = fs.readFileSync('saft.xml', 'utf-8');


//console.log(xml);


// Create a new DOMParser object
const parser = new DOMParser();

// Parse the XML string
const xmlDoc = parser.parseFromString(xml, 'text/xml');


/** 
// Find all Customer elements
const customers = xmlDoc.getElementsByTagName('Customer');

// Print details of each customer
for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const customerID = customer.getElementsByTagName('CustomerID')[0].textContent;
    const companyName = customer.getElementsByTagName('CompanyName')[0].textContent;
    const customerTaxID = customer.getElementsByTagName('CustomerTaxID')[0].textContent;
    const addressDetail = customer.getElementsByTagName('AddressDetail')[0].textContent;
    const city = customer.getElementsByTagName('City')[0].textContent;
    const postalCode = customer.getElementsByTagName('PostalCode')[0].textContent;
    const country = customer.getElementsByTagName('Country')[0].textContent;


    console.log(`Customer ID: ${customerID}`);
    console.log(`Company Name: ${companyName}`);
    console.log(`Customer Tax ID: ${customerTaxID}`);
    console.log(`Address Detail: ${addressDetail}`);
    console.log(`City: ${city}`);
    console.log(`Postal Code: ${postalCode}`);
    console.log(`Country: ${country}`);
    console.log('----------------------------------');
}
*/

/**
// Find all Product elements
const products = xmlDoc.getElementsByTagName('Product');

// Print details of each product
console.log('Products:');
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productType = product.getElementsByTagName('ProductType')[0].textContent;
    const productCode = product.getElementsByTagName('ProductCode')[0].textContent;
    const productDescription = product.getElementsByTagName('ProductDescription')[0].textContent;
    const productNumberCode = product.getElementsByTagName('ProductNumberCode')[0].textContent;

    console.log(`Product Type: ${productType}`);
    console.log(`Product Code: ${productCode}`);
    console.log(`Product Description: ${productDescription}`);
    console.log(`Product Number Code: ${productNumberCode}`);
    console.log('----------------------------------');
}
*/


// Find all Invoice elements
const invoices = xmlDoc.getElementsByTagName('Invoice');

// Print details of each invoice
console.log('Sales Invoices:');
for (let i = 0; i < invoices.length; i++) {
    const invoice = invoices[i];
    const invoiceNo = invoice.getElementsByTagName('InvoiceNo')[0].textContent;
    const invoiceDate = invoice.getElementsByTagName('InvoiceDate')[0].textContent;
    const customerID = invoice.getElementsByTagName('CustomerID')[0].textContent;
    const netTotal = invoice.getElementsByTagName('NetTotal')[0].textContent;
    const grossTotal = invoice.getElementsByTagName('GrossTotal')[0].textContent;


    console.log(`Invoice No: ${invoiceNo}`);
    console.log(`Invoice Date: ${invoiceDate}`);
    console.log(`Customer ID: ${customerID}`);
    console.log(`Net Total: ${netTotal}`);
    console.log(`Gross Total: ${grossTotal}`);
    console.log('----------------------------------');

    // Find all Line elements within the current Invoice
    const lines = invoice.getElementsByTagName('Line');
    console.log('Details of Each Sale:');
    for (let j = 0; j < lines.length; j++) {
        const line = lines[j];
        const lineNumber = line.getElementsByTagName('LineNumber')[0].textContent;
        const productCode = line.getElementsByTagName('ProductCode')[0].textContent;
        const productDescription = line.getElementsByTagName('ProductDescription')[0].textContent;
        const quantity = line.getElementsByTagName('Quantity')[0].textContent;
        const unitPrice = line.getElementsByTagName('UnitPrice')[0].textContent;
        const creditAmount = line.getElementsByTagName('CreditAmount')[0].textContent;

        console.log(`Line Number: ${lineNumber}`);
        console.log(`Product Code: ${productCode}`);
        console.log(`Product Description: ${productDescription}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`Unit Price: ${unitPrice}`);
        console.log(`Credit Amount: ${creditAmount}`);
        console.log('---');
    }
    console.log('----------------------------------');
}
