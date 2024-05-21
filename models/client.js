//create client model using sql schema
module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        client_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_name: {
            type: Sequelize.STRING
        },
        client_email: {
            type: Sequelize.STRING
        },
        client_phone: {
            type: Sequelize.STRING
        },
        client_address: {
            type: Sequelize.STRING
        },
        client_city: {
            type: Sequelize.STRING
        },
        client_state: {
            type: Sequelize.STRING
        },
        client_zip: {
            type: Sequelize.STRING
        },
        client_country: {
            type: Sequelize.STRING
        },
        client_notes: {
            type: Sequelize.STRING
        },
        client_status: {
            type: Sequelize.STRING
        }
    });

    return Client;
};