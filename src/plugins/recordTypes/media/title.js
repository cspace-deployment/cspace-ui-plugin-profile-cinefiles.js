export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const commonData = getPart(data, 'media_common');
  const title = commonData ? commonData.get('title') : null;

  const bampfaData = getPart(data, 'media_cinefiles');
  const imageNumber = bampfaData ? bampfaData.get('page') : null;

  return [imageNumber, title].filter((part) => !!part).join(' – ');
};
