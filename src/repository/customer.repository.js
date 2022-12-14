const mongoErrorHandler = require("./utils/handle-mongo-error");
const CustomerModel = require("../models/customer.model");

exports.findAll = async () => {
    try {
        const customers = await CustomerModel.find();
        return customers;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findById = async (id) => {
    try {
        const customer = await CustomerModel.findById(id);
        return customer;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findByCpf = async (cpf, id = undefined) => {
    try {        
        let customer;
        if (id) {
            customer = await CustomerModel.find({
                _id: { $ne: id },
                cpf: cpf
            })
        } else {
            customer = await CustomerModel.find({
                cpf: cpf
            })
        }
        return customer;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.createCustomer = async (name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    try {
        const customer = await CustomerModel({
            name: name,
            cpf: cpf,
            cep: cep,
            street: street,
            streetNumber: streetNumber,
            streetComplement: streetComplement,
            neighborhood: neighborhood,
            city: city,
            state: state,
            email: email,
            mobileNumber: mobileNumber,
            phoneNumber: phoneNumber
        });
        await customer.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.updateCustomer = async (id, name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    try {
        const customer = await CustomerModel.findByIdAndUpdate(id, {
            name: name,
            cpf: cpf,
            cep: cep,
            street: street,
            streetNumber: streetNumber,
            streetComplement: streetComplement,
            neighborhood: neighborhood,
            city: city,
            state: state,
            email: email,
            mobileNumber: mobileNumber,
            phoneNumber: phoneNumber
        });
        await customer.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.deleteCustomer = async (id) => {
    try {
        await CustomerModel.findByIdAndDelete(id);
    } catch (e) {
        mongoErrorHandler(e);
    }
}