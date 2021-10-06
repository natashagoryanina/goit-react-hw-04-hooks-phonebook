import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Amazon Ember",sans-serif;
        padding: 25px;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    button {
        background-color: #fff;
        border: 1px solid #d5d9d9;
        border-radius: 8px;
        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
        box-sizing: border-box;
        color: #0f1111;
        cursor: pointer;
        display: flex;
        margin-bottom: 20px;
        font-family: "Amazon Ember",sans-serif;
        font-size: 13px;
        line-height: 29px;
        padding: 0 10px 0 11px;
        position: relative;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
    }

    button:hover {
        background-color: #f7fafa;
    }

    button:focus {
        border-color: #008296;
        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
        outline: 0;
    }

    h1,
    h2 {
        margin-top: 0;
    }
`;

export default GlobalStyles;