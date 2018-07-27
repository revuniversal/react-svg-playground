import styled from 'src/styled-components';

const PreviewLayout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1px 1px;
  height: 100%;
  width: 100%;
  justify-items: stretch;
  align-items: stretch;
  background: ${p => p.theme.panel.primary};
`;
const SourcePanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: 1 2;
  grid-row: 1 2;
  overflow: hidden;

  pre,
  code {
    height: 100%;
    width: 100%;
  }
`;
const GraphicPanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: 2 3;
  grid-row: 1 2;
  overflow: hidden;
`;

export { SourcePanel, GraphicPanel };
export default PreviewLayout;
