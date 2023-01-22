import 'highlight.js/styles/tomorrow-night.css';
import * as React from 'react';
import Highlight from 'react-highlight';
import format from './format';

interface IProps {
  markup: string;
}

function SourceView({ markup }: IProps) {
  return <Highlight>{format(markup, { printWidth: 40 })}</Highlight>;
}

export default SourceView;
