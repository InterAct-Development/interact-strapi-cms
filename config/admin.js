module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '561af4e6781433ccf37c008c9f063391'),
  },
});
