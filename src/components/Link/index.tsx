import NextLink, { LinkProps } from 'next/link';
import React from 'react';
import baseUrl from '../../utils/baseUrl';
const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  if (props.as) {
    props.as = baseUrl(props.as);
  }
  return <NextLink href={baseUrl(href)} {...props} />;
};

export default Link;
