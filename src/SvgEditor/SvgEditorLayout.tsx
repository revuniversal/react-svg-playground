import styled from '../styled-components';

const SvgEditorLayout = styled.div`
  display: grid;
  grid-template-columns: [left] 20% [middle] auto [right];
  grid-template-rows: [top] 280px [middle] auto [bottom];
  grid-gap: 1px 1px;
  height: 100%;
  width: 100%;
  justify-items: stretch;
  align-items: stretch;
  align-self: stretch;
  justify-self: stretch;
  background: ${p => p.theme.panel.primary};

  label {
    user-select: none;
    text-transform: uppercase;
    letter-spacing: 0.6;
  }

  svg#Preview {
    height: 272px;
    width: 98%;
    margin: 3px 1%;
    border: 1px dashed ${p => p.theme.panel.primary};
    background: white;
  }
`;

const ControlPanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: left / middle;
  grid-row: top / bottom;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const PreviewPanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: middle / right;
  grid-row: top / middle;
  overflow: hidden;
`;
const ElementEditorPanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: middle / right;
  grid-row: middle / bottom;
  overflow: hidden;
`;

export { ControlPanel, PreviewPanel, ElementEditorPanel };
export default SvgEditorLayout;
