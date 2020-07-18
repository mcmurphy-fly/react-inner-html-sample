interface IProps {
  content: string;

  /**
   * wrapper tag
   * @default "div"
   */
  tagName?: keyof JSX.IntrinsicElements;
}

export default IProps;
