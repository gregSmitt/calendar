import { MAIN_TEXT, PRIMARY, SECOND_TEXT } from "./colors";

const typography = {
  fontFamily: 'Inter, Arial, sans-serif',
  color: MAIN_TEXT,
  h1: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '40px',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
  },
  h3: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    color: SECOND_TEXT,
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '24px',
    color: PRIMARY,
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '24px',
    color: SECOND_TEXT,
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    color: SECOND_TEXT,
  },
  button: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '24px',
  },
};

export default typography;
