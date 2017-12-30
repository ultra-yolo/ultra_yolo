import { injectGlobal } from "styled-components";
import { black } from "./variables";

/* eslint-disable */
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lobster');
    @import url('https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

    body {
        font-family: 'VT323', monospace;
        font-size: 1.5em;
        color: ${black};
    }
`;
