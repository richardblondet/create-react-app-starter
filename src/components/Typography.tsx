import React from 'react';
import { AnchorProps, TypographyComponentProps, TypographyStyles } from "../store/types";
import { colors } from "../themes/preset";
import { Link as RouterLink } from 'react-router-dom';
import { TextPrimitive } from './Utils';
import { createTextComponent } from '../store/utils';

/**
 * Typography
 * 
 * ...? Typography is the art and technique of arranging type to make written 
 * language legible, readable, and appealing when displayed. — Wikipedia
 * It involves font style, appearance, and structure, which aims to elicit certain 
 * emotions and convey specific messages. — careerfoundry.com (2020 Guide)
 * 
 * Every type of text should be define in its own component. 
 * Text components:
 * H1, H2, H3, H4, H5, H6, Lead, Paragraph, Small, 
 */

export const typographyStyles: TypographyStyles = {
  H1: {
    fontSize: 4,
    fontWeight: 900,
    fontFamily: '',
    mb: 'L',
    as: 'h1',
  },
  H2: {
    fontSize: 3,
    fontWeight: 0,
    color: colors.primary,
    fontFamily: '',
    as: 'h2',
  },
  H3: {
    fontSize: 0,
    fontWeight: 0,
    fontFamily: '',
    as: 'h3',
  },
  H4: {
    fontSize: 0,
    fontWeight: 0,
    color: colors.primary,
    fontFamily: '',
    as: 'h4',
  },
  H5: {
    fontWeight: 0,
    fontSize: 0,
    fontFamily: '',
    as: 'h5',
  },
  H6: {
    fontWeight: 0,
    fontSize: 0,
    fontFamily: '',
    as: 'h6',
  },
  Lead: {
    fontWeight: 0,
    fontSize: 0,
    fontFamily: '',
    as: 'p',
  },
  Paragraph: {
    fontSize: 0,
    fontWeight: 0,
    fontFamily: '',
    as: 'p',
  },
  Small: {
    fontSize: 0,
    fontWeight: 0,
    fontFamily: '',
    as: 'small',
  },
  Link: {
    fontWeight: 0,
    color: colors.primary,
    fontSize: 0,
    fontFamily: '',
  },
};

/**
 * Link
 * 
 * The Anchor Link should comply with our routing
 * system in place
 * @param param0 props
 */
const Link: React.FC<AnchorProps> = ({ to, onClick, children, ...props }) => (
  <RouterLink to={to} onClick={onClick}>
    <TextPrimitive {...typographyStyles.Link} {...props}>
      {children}
    </TextPrimitive>
  </RouterLink>
);
Link.displayName = 'Link';

/**
 * Typography Component Group
 * 
 * usage:
 * const { H1 } = Typography;
 */
export const Typography: TypographyComponentProps = {
  H1: createTextComponent(typographyStyles.H1, 'H1'),
  H2: createTextComponent(typographyStyles.H2, 'H2'),
  H3: createTextComponent(typographyStyles.H3, 'H3'),
  H4: createTextComponent(typographyStyles.H4, 'H4'),
  H5: createTextComponent(typographyStyles.H5, 'H5'),
  H6: createTextComponent(typographyStyles.H6, 'H6'),
  Lead: createTextComponent(typographyStyles.Lead, 'Lead'),
  Paragraph: createTextComponent(typographyStyles.Paragraph, 'Paragraph'),
  Small: createTextComponent(typographyStyles.Small, 'Small'),
  Link: Link,
};