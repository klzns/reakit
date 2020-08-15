module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: require.resolve("postcss-loader"),
        options: {
          config: {
            path: __dirname,
          },
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
