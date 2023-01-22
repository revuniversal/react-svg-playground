type Color = string;

interface IPanelTheme {
  primary: Color;
  background: Color;
  activeBackground: Color;
  hoverBackground: Color;
  accent: Color;
  passiveAccent: Color;
}

export default interface ITheme {
  panel: IPanelTheme;
};
