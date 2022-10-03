'use strict';

/**
 * maintenance controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::maintenance.maintenance');
