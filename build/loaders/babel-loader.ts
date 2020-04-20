import path from 'path';

export default function loader() {
  return {
    test: /^(?!.*\.min\.jsx?$).*\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cwd: path.resolve(__dirname, '../../'),
          cacheDirectory: true,
        },
      },
    ],
  };
}
