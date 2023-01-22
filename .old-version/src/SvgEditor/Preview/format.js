// @ts-nocheck
// @ts-ignore
import { printDocToString } from 'prettier/src/doc-printer';
import parse from 'prettier/src/parser-babylon';
import { printAstToDoc } from 'prettier/src/printer';

export default function format(code, options) {
  let opts = {
    bracketSpacing: true,
    cursorOffset: -1,
    insertPragma: false,
    jsxBracketSameLine: false,
    originalText: code,
    parser: 'babylon',
    printWidth: 80,
    rangeEnd: Infinity,
    rangeStart: 0,
    requirePragma: false,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false,
    ...options
  };
  const ast = parse(code);
  const doc = printAstToDoc(ast, opts);
  const result = printDocToString(doc, opts);
  return result.formatted;
}
