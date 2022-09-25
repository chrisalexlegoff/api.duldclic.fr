'use strict';

/**
 * hamburger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hamburger.hamburger');
