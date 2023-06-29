import { ImageListItem } from './ImageListItem/ImageListItem';
import PropTypes from 'prop-types';
import { UlStyled } from './ImageList.styled';

export const ImageList = ({ array, imagesAfterCheck }) => {
  const check = index => {
    const res = imagesAfterCheck[index]?.isPermitted;
    console.log('check', res);

    if (res === undefined) {
      return undefined;
    }

    if (res) {
      return 'Дозволено';
    }
    return 'Заборонено';
  };
  return (
    <UlStyled>
      {array.map((item, index) => (
        <ImageListItem link={item} key={index} isPermitted={check(index)} />
      ))}
    </UlStyled>
  );
};

ImageList.propTypes = {
  array: PropTypes.array.isRequired,
  imagesAfterCheck: PropTypes.array.isRequired,
};