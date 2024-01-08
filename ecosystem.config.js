module.exports = {
  apps : [{
    name: "api-gateway",
    script: './api-gateway/server.js',
    watch: './api-gateway/server.js',
  }, {
    name: "order",
    script: './order/server.js',
    watch: './order/server.js',
    instances: "2",
  }, {
    name: "payment",
    script: './payment/server.js',
    watch: './payment/server.js',
  }],
};
