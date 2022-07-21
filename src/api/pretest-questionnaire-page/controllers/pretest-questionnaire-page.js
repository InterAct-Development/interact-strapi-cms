'use strict';

/**
 *  pretest-questionnaire-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pretest-questionnaire-page.pretest-questionnaire-page', ({ strapi }) => ({

    async find(ctx) {
        ctx.query.populate = [
            'pre_questions', 'pre_questions.question_answers'
        ]
        const { data, meta } = await super.find(ctx);


        return { data, meta };
    },



}));