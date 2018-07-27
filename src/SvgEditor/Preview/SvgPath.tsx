import { observer } from 'mobx-react';
import * as React from 'react';
import { Path } from 'src/app/svg/elements';

interface IProps {
  path: Path;
}

const SvgPath = ({ path }: IProps) => (
  <path
    d={path.toData()}
    stroke={path.stroke}
    fill={path.fill}
    strokeWidth={path.strokeWidth}
  />
);

export default observer(SvgPath);
