'use strict';

/**
 * maintenance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance.maintenance');
