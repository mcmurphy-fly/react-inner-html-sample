import DOMPurify from 'dompurify';
import React, { FunctionComponent } from 'react';
import IProps from './IProps';

const InnerContent: FunctionComponent<IProps> = ({
  content,
  tagName = 'div',
}) => {
  const Wrapper = tagName;

  return (
    <Wrapper
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    ></Wrapper>
  );
};

export default InnerContent;
