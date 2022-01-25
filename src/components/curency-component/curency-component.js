import React from 'react';

import './curency-component.styles.scss';

const CurencyRate = () => {

    const myApiUrl = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

    const myInit = {
    method: 'GET',
    mode: 'cors',
    };


    fetch(myApiUrl, myInit)
      .then(res => res.json())
      .then(
        (result) => {
           const curencyRate = Map(result)
              console.log(result);
        },
        // Примітка: важливо обробляти помилки саме тут,
        // а не в блоці catch (), щоб не перехоплювати
        // виключення з помилок в самих компонентах.
        (error) => {
            console.log(error);
        }
      )

//     async function getRate(money) {
//         fetch(myApiUrl, myInit)
//         .then(function(response) {
//             if (!response.ok) {
//                 throw new Error("HTTP error, status = " + response.status);
//             }
//             return response.curencyExchange();
//         })
//         .then(curencyExchange => {
//         alert(`Name:${money} ${curencyExchange}.`);
//         console.log(curencyExchange);
//       return curencyExchange;
//     })
//     .catch(err => {
//       if (err) {
//         alert(" пожалуйста, повторите ввод.");
//         return CurencyRate();
//       } else {
//         throw err;
//       }
//     });
//     }   
    
//  getRate("UAH")
    
    
 

  return (
    <div className='collection-item'> 
          {/* <span className='ccy'>{ccy}</span>
          <span className='ccy'>{base_ccy}</span>
        <span className='price'>{buy}</span>
        <span className='price'>{sale}</span> */}
          CURRENCY
    </div>
  );
};




// function demoGithubUser() {
//   let name = prompt("Введите логин?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }
 

export default CurencyRate;