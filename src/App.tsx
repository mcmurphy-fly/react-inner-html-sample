import React from 'react';
import InnerContent from './components/InnerContent';

const App = () => (
  <>
    <InnerContent
      content={`
        <h1>Hello</h1>
        <p>bla bla <b>bla</b></p>
    `}
      tagName="section"
    />
    <InnerContent content="<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>" />
  </>
);

export default App;
