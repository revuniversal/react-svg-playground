import styled from 'src/styled-components';

const HEADER_ROW_HEIGHT = '26px';

const ControlPanelLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: [left] auto [right];
  grid-template-rows: [top] ${HEADER_ROW_HEIGHT} [contentStart] auto [bottom];
  overflow: hidden;
  border-collapse: collapse;
  background-color: ${p => p.theme.panel.background};
  color: ${p => p.theme.panel.accent};
  font-size: 12px;
  grid-gap: 1px 1px;
  align-items: stretch;
  justify-items: stretch;
`;

const ImagePropertiesPanel = styled.div`
  overflow: hidden;
  grid-row: top / contentStart;
  grid-column: left / right;

  h3 {
    float: left;
    line-height: ${HEADER_ROW_HEIGHT};
    height: ${HEADER_ROW_HEIGHT};
    padding: 0;
    margin: 0;
  }
`;

const ElementList = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  grid-row: contentStart / bottom;
  grid-column: left / right;
`;

export { ImagePropertiesPanel, ElementList };
export default ControlPanelLayout;
