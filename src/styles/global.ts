import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  // default configuration based on https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #ffffff;

    --green: #33CC95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (on Desktop)
  // This settings are for better readabilty cross-browser
  // it's also good for accessibility
  // we use percentage since desktop base font size will be 16 px (1rem)
  // and it decreases in smaller screens 
  html {
    @media (max-width: 1080px) {
      font-size: 93.15% //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% //14px
    }
  }

  // font smothing so that the font gets less 'blurry'
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  //
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  //
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
  }

  button {
    cursor: pointer   
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;

    border-radius: 0.24rem;
  }

`