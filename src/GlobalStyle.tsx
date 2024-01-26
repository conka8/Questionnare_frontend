import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background:url("../assets/images/backgroundColor.png") no-repeat;
    background-size: 100% 100%;
    min-height:100vh;
    .p-relative {
      position: relative;
    }
  }
@media all and (max-width:767px) {
  body.no-scroll {
    overflow:hidden !important;
  }
}
  
  .footerLastLink > div:last-child {
    border:none !important;
  }
  
  // fonts
  @font-face {
    font-family: "Walkway Black";
    font-style: normal;
    font-weight: normal;
    src: url("./assets/fonts/Walkway/WalkwayBlack.ttf");
  }
  .pointer{
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style-type: '✽ ';
  }
 
  .nav-tabs .nav-link.active {
    background-color: transparent !important;
    border : none !important;
    outline: none !important;
    &:hover{
      border : none !important;
      outline: none !important;
    }
  }
  .nav-tabs .nav-link {
    padding: 0 !important;
    outline: none !important;
    border : none !important;
    &:hover{
      border : none !important;
      outline: none !important;
    }
  }
  .nav-tabs {
    border-bottom: none !important;
    outline: none !important;
    justify-content: center;
    width: 100%;
    position: sticky;
    left: 0;
    top:0;
    z-index: 2;
    background: #0D1620;
    //margin: 30px 0px 40px 85px !important;
    &:hover{
      border : none !important;
      outline: none !important;
    }
  }
  .nav-tabs.nav {
    width:100vw;
    margin-left: calc((100% - 100vw) / 2) !important;
  }
  .fill-tab-example.nav-tabs {
    position:static !important;
  }
  .nav-tabs.fixed {
    position:fixed;
    top:0;
    left:0;
    background: #0D1620 !important;
    z-index: 999;
    box-shadow: 0px 0px 30px rgb(0 0 0 / 38%);

  }
  // .scroll-position {
  //   height:20px;
  // }
  .nav-item {
    outline: none !important;
    &:hover{
      border : none !important;
      outline: none !important;
    }
  }
  .spinner-border{
    width: 20px !important;
    height: 20px !important;
    border-right-color: transparent !important;
  }
  .overflow-hidden{
    overflow: hidden;
  }

  .form-check-input, .form-check-input:focus {
    width: 24px !important;
    height: 24px !important;
    background:none;
    margin-right:10px;
    border:2px solid #585858;
  }

  .form-check-input:focus {
    box-shadow: none !important;
  }

 
  .form-check-input:checked {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), linear-gradient(133.82deg, #513CFF 13.2%, #23ABD4 100%) !important;
    border:none;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

  .Toastify__toast-container--top-right {
    top: 150px;
    left: 80%;
    transform: translate(-50%, -50%);
    right:auto;
  }
  .Toastify__toast-theme--light {
    background: #0a0c0c;
    color: #ffffff;
  }
 

  body {
    overflow-x:hidden !important;
  }
  #fill-tab-example-tabpane-2, #fill-tab-example-tabpane-3, #fill-tab-example-tabpane-4 {
   
  }

  .select-main-container > div {
    background-color: #201D1D;
    border: 2px solid transparent;
    border-radius: 8px;
  }
    
  .select-main-container > div > div:not(:last-child) {
    display: flex;
  }

  .Toastify__toast-container--top-right {
    right: 0em; 
    // left: auto;
  }

  .ReactModal__Overlay {
    background: rgba(0, 0, 0, 0.7) !important;
  }

  .ReactModal__Content {
    max-width: 1061px;
    max-height: 572px;
    margin: auto;
    background: #0F1111 !important;
    border: none !important;
    padding: 48px !important;
    inset: auto 40px !important;
    top: 50% !important;
    transform: translateY(-50%);
  }

  .custom-scroll {
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    /* Track */
    &::-webkit-scrollbar-track {
      background: #AAAAAA;
      border-radius: 10px;
    }
     
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 10px;
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
  // .select-main-container > div div {
  //   color :rgb(255,255,255,1) !important;
  // }
`;

export default GlobalStyle;
