import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import Path from './app/svg/elements/Path';
import SvgImage from './app/svg/SvgImage';
import defaultTheme from './default-theme';
import { ThemeProvider } from './styled-components';
import SvgEditor from './SvgEditor';

const image = new SvgImage();
image.addElement(new Path());

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <React.Fragment>
          <DevTools />
          <SvgEditor image={image} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
