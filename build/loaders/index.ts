/**
 * Get all loaders
 *
 * @export
 * @param {boolean} isDev is dev or not
 */
export default function getLoaders(isDev: boolean) {
  const loaders = [
    require('./babel-loader').default,
    require('./ts-loader').default,
  ];
  return loaders.map(loader => loader.call(loader, isDev));
}
