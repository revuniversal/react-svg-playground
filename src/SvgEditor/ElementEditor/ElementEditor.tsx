import * as React from 'react';
import { Path } from 'src/app/svg/elements';
import ISvgElement from 'src/app/svg/SvgElement';
import PathEditor from './PathEditor';

interface IProps {
  element?: ISvgElement;
}

const ElementEditor = ({ element }: IProps) => (
  <React.Fragment>
    {element == null ? <h1>No element selected</h1> : selectEditor(element)}
  </React.Fragment>
);

function selectEditor(element: ISvgElement) {
  switch (element.constructor) {
    case Path:
      return <PathEditor currentPath={element as Path} />;
  }

  return <h1>Error</h1>;
}

export default ElementEditor;
