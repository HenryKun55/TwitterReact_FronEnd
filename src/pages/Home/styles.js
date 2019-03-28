import styled from 'styled-components'

export const Container = styled.div`

  .navigation {
      margin-top: -80px;
      width: 100%;
      background-color: black;    
  }
    
  img {
    width: 25px;
    border-radius: 50px;
    float: left;
  }
  
  .logout {
    font-size: .8em;
    font-family: 'Oswald', sans-serif;
    position: relative;
    right: -18px;
    bottom: -4px;
    overflow: hidden;
    letter-spacing: 3px;
    opacity: 0;
    transition: opacity .45s;
    -webkit-transition: opacity .35s;
  }
  
  .button {
    text-decoration: none;
    float: right;
    padding: 12px;
    margin: 15px;
    color: white;
    width: 40px;
    background-color: #4f92ff;
    transition: width .35s;
    -webkit-transition: width .35s;
    overflow: hidden;
    cursor: pointer;
  }

  a:hover {
    width: 120px;
  }
  
  a:hover .logout{
    opacity: .9;
  }
  
  a {
    text-decoration: none;
  }
  `

  export const Tweet = styled.div`
  
  .tweet {
    margin: 10vh auto;
    border: 1px solid #eee;
    padding: 25px 50px;
    border-radius: 5px;
    max-width: 500px;
    background: white;
  }
  .tweet .follow i {
    color: #55acee;
    padding-right: 5px;
  }
  .tweet--user:after {
    content: "";
    display: block;
    clear: both;
  }
  .tweet--user-avatar {
    border-radius: 5px;
    float: left;
    margin-right: 10px;
  }
  .tweet--user-name {
    font-weight: bold;
    padding-top: 9px;
  }
  .tweet--user-name span {
    font-weight: normal;
    color: #999;
    font-size: 0.8em;
    display: block;
  }
  .tweet--body {
    margin: 20px 0 5px;
    font-size: 1.5em;
  }
  .tweet--time {
    font-weight: normal;
    color: #999;
    font-size: 0.8em;
  }
  .tweet--actions {
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 10px;
  }
  .tweet--actions [class*="fa-"] {
    float: left;
    color: #999;
  }
  .tweet--actions [class*="fa-"].fa-heart:hover {
    color: #DD2E44;
  }
  .tweet--actions [class*="fa-"]:hover {
    color: #4A913C;
    cursor: pointer;
  }
  .tweet--actions [class*="fa-"]:after {
    content: "";
    display: block;
    clear: both;
  }
  .tweet--actions span {
    color: #999;
    font-size: 0.8em;
    text-transform: uppercase;
  }
  .area {
    margin: 10vh auto;
    border: none;
    border-radius: 5px;
    padding: 0px 50px;
    max-width: 500px;
    background: none;
  }
  .text {
    font-size: 1.2em;
    margin-left:-50px;
    margin-bottom:-5px;
    width:116%;
    border:none;
    padding:10px;
    resize: none;
    border-radius: 5px;
    background: white;
  }

  textarea::placeholder {
    color: grey;
    font-size: 1.2em;
  }
`

