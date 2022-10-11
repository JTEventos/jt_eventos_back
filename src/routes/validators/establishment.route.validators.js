exports.createEstablishmentSchema = {
    description : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'description'"
    }, 
    cep : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'cep'"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'street'"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'streetNumber'"
    },
    streetComplement : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'streetComplement'"
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'neighborhood'"
    },
    city : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'city'"
    },
    state : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'state'"
    }
}

exports.updateEstablishmentSchema = {
    id : {
        in: "params",
        isInt: true
    },
    description : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'description'"
    }, 
    cep : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'cep'"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'street'"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'streetNumber'"
    },
    streetComplement : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'streetComplement'"
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'neighborhood'"
    },
    city : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'city'"
    },
    state : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'state'"
    }
}

exports.deleteEstablishmentSchema = {
    id : {
        in: "params",
        isInt: true
    }
}