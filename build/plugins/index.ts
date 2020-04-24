/**
 * Get all plugins
 *
 * @export
 * @param {boolean} isDev is dev or not
 */
export default function getPlugins(isDev: boolean) {
  const plugins = [];
  return plugins.reduce((pluginList, plugin) => {
    // eslint-disable-next-line
    pluginList = [...pluginList, ...plugin.call(plugin, isDev)];
    return pluginList;
  }, []);
}
