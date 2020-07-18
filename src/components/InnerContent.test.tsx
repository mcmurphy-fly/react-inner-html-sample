import React from 'react';
import InnerContent from './InnerContent';
import renderer from 'react-test-renderer';

describe('InnerContent', () => {
  test('renders html content in custom tag', () => {
    const tree = renderer
      .create(
        <InnerContent
          content={`
          <h1>Hello</h1>
          <p>bla bla <b>bla</b></p>
      `}
          tagName="section"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders html content in div by default', () => {
    const tree = renderer
      .create(
        <InnerContent
          content={`
          <h1>Hello</h1>
          <p>bla bla <b>bla</b></p>
      `}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('sanitize XSS', () => {
    const tree = renderer
      .create(
        <InnerContent content="<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
