'use strict'


const joi =require('joi')

const envVarSchema = joi
    .object({
        NODE_ENV: joi
            .string()
            .valid(['production','production','test'])
            .required(),
        SERVICE_NAME: joi.string().valid(['todo'])
    })
    .unknown()

    const {error, value :envVars}= joi.validate()