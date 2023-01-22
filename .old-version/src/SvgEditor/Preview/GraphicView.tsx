import * as React from 'react';
import { Path } from 'src/app/svg/elements';
import Image from 'src/app/svg/SvgImage';
import SvgPath from './SvgPath';

interface IProps {
  image: Image;
}

const GraphicView = ({ image }: IProps) => (
  <svg id="Preview" viewBox={image.viewBox.toString()}>
    {image.elements.map((e, i) => <SvgPath key={i} path={e as Path} />)}
  </svg>
);

export default GraphicView;
