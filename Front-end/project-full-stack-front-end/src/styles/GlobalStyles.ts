import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
:root {
	--color-feedback-alert-1: rgba(205,43,49,1);
	--color-feedback-alert-2: rgba(253,216,216,1);
	--color-feedback-alert-3: rgba(255,229,229,1);
	--color-feedback-sucess-1: rgba(24,121,78,1);
	--color-feedback-sucess-2: rgba(204,235,215,1);
	--color-feedback-sucess-3: rgba(221,243,228,1);
	--color-random-random-1: rgba(227,77,140,1);
	--color-random-random-2: rgba(192,66,119,1);
	--color-random-random-3: rgba(125,42,77,1);
	--color-random-random-4: rgba(112,0,255,1);
	--color-random-random-5: rgba(98,0,227,1);
	--color-random-random-6: rgba(54,0,125,1);
	--color-random-random-7: rgba(52,153,116,1);
	--color-random-random-8: rgba(42,125,95,1);
	--color-random-random-9: rgba(21,61,46,1);
	--color-random-random-10: rgba(97,0,255,1);
	--color-random-random-11: rgba(87,0,227,1);
	--color-random-random-12: rgba(48,0,125,1);
	--color-brand-brand-1: rgba(69,41,230,1);
	--color-brand-brand-2: rgba(81,38,234,1);
	--color-brand-brand-3: rgba(176,166,240,1);
	--color-brand-brand-4: rgba(237,234,253,1);
	--color-grey-scale-grey-0: rgba(11,13,13,1);
	--color-grey-scale-grey-1: rgba(33,37,41,1);
	--color-grey-scale-grey-2: rgba(73,80,87,1);
	--color-grey-scale-grey-3: rgba(134,142,150,1);
	--color-grey-scale-grey-4: rgba(173,181,189,1);
	--color-grey-scale-grey-5: rgba(206,212,218,1);
	--color-grey-scale-grey-6: rgba(222,226,230,1);
	--color-grey-scale-grey-7: rgba(233,236,239,1);
	--color-grey-scale-grey-8: rgba(241,243,245,1);
	--color-grey-scale-grey-9: rgba(248,249,250,1);
	--color-grey-scale-grey-10: rgba(253,253,253,1);
	--color-colors-fixed-white-fixed: rgba(255,255,255,1);

}
.text-style-heading-heading-1-700 {
	font-size: 44px;
	font-family: "Lexend";
	font-weight: 700;
	font-style: normal;
	line-height: 56px;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-2-600 {
	font-size: 36px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-3-500 {
	font-size: 32px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-3-600 {
	font-size: 32px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-4-600 {
	font-size: 28px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-4-500 {
	font-size: 28px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-5-500 {
	font-size: 24px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-5-600 {
	font-size: 24px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-6-500 {
	font-size: 20px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-6-600 {
	font-size: 20px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-7-500 {
	font-size: 16px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-7-600 {
	font-size: 16px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-inputs-buttons-input-label {
	font-size: 14px;
	font-family: "Inter";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-inputs-buttons-input-placeholder {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-inputs-buttons-button-big-text {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-1-400 {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-1-600 {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-2-400 {
	font-size: 14px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-2-500 {
	font-size: 14px;
	font-family: "Inter";
	font-weight: 500;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}
`;
