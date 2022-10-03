'use strict';

/**
 * maintenance router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::maintenance.maintenance');
