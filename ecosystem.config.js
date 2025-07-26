module.exports = {
  apps: [
    {
      name: 'product-docs',
      script: 'npx',
      args: 'serve -s build -l 8080',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
