// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from './components/pages/Login';
import React from 'react';
import './App.css'

function App() {
  return (

    <>
      <Login />
    </>

  );
}

export default App




// function Logo() {
//   return <div className="logo"><span>LOGO</span></div>
// }

// function Menu() {
//   return(
//   <div className={"buttons-container"}>
//   <button> О компании</button>
//   <button> Наши заслуги</button>
//   {/* <button> О компании</button>  */}
//   </div>
//   )
// }

// function Feedback() {
//   return (
//       <div className={"feedback"}>
//       <span>Позвонить</span>
//       <span></span>
//       </div>
//   )
// }

// function Form() {
//   return (
//       <div className={"form"}>
//           <input
//           type={"text"}
//           placeholder={"Введите ваш логин"}
//           />
//           <input
//           type={"text"}
//           placeholder={"Введите ваш пароль"}
//           />
//           <button>Войти</button>
//           <button>Зарегистрироваться</button>
//       </div>
//   )
// }

// function Header() {
//   return (
//       <header>
//           {/* <NonJSXLogo/>  */}
//           <Menu/>
//           <Feedback/>
//       </header>
//   )
// }

// function Main() {
//   return (
//       <main>
//           <Form/>
//       </main>
//   )
// }


//function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Main/>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

