/* global cspaceUIPluginProfileCineFiles */
/* The cspaceUIPluginProfileCineFiles global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import logo from '../images/logo.png';
import styles from '../styles/cspace-ui-plugin-profile/cinefiles.css';

export default () => ({
  logo,
  messages,
  className: styles.common,
  mediaSnapshotSort: 'page',
  prettyUrls: true,
  relationMemberPerm: 'R',
  tenantId: '50',
  pluginInfo: {
    cspaceUIPluginProfileCineFiles: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileCineFiles.name',
          defaultMessage: 'CineFiles profile',
        },
      }),
      version: cspaceUIPluginProfileCineFiles.packageVersion,
    },
  },
  plugins: plugins.map((plugin) => plugin()),
});
