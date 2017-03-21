import { configure } from '@kadira/storybook';
import 'semantic-ui-css/semantic.css';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
