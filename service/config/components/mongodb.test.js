(function () {
  'use strict';

  const joi    = require('joi');
  const nconf  = require('nconf');

  const enVarsSchema = joi.object({
    AUTH_SERVER_SESSION_SECRET : joi.string().required(),
    TOKEN_ISSUER : joi.string().required(),
    API_HOST_URL:joi.string().uri().required(),
    ENCRYPT_DECRYPT_PASSWORD: joi.string().required(),
    ENCRYPT_DECRYPT_ALGORITHM: joi.string().required(),
    RESET_PASSWORD_TOKEN: joi.string().required(),
    APP_DOMAIN:joi.string().uri({scheme:'https'}).required()


  })
  .unknown();

  const  { error, value: env} = joi.validate(process.env, enVarsSchema);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  module.exports ={
    AUTH_SERVER_SESSION_SECRET: env.AUTH_SERVER_SESSION_SECRET,
    TOKEN_ISSUER: env.TOKEN_ISSUER,
    NOTIFY_BUSINESS_ON_COUPON_EXPIRATION:2,
    REMOVE_TESTIMONIAL_ON_UNPUBLISH:90,
    REMOVE_REVIEW_ON_CANCEL_BUSINESS: 7
  };
})();
