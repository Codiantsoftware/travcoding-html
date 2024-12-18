import React from 'react';
import { COMMON_IMAGE_URL, FRONTEND_IMAGE_URL } from '../../../config/index';

export function Image({ previewSource = '', imageFor = 'frontend', source, alt = 'image', ...rest }) {
  const imagePath = {
    common: COMMON_IMAGE_URL,
    frontend: FRONTEND_IMAGE_URL
  };
  return (
    <>
      {previewSource ? (
        <img src={previewSource} alt={alt} {...rest} />
      ) : (
        <img src={`${imagePath[imageFor]}/${source}`} alt={alt} {...rest} />
      )}
    </>
  );
}
