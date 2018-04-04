import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';

export default () => pluginContext => ({
  recordTypes: {
    media: {
      advancedSearch: advancedSearch(pluginContext),
      fields: fields(pluginContext),
      forms: forms(pluginContext),
    },
  },
});