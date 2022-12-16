import './App.css';
import Nav from './Components/Nav'
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import React, { useEffect, useState } from 'react';
function App() {

  useEffect(() => {
    async function getData() {
      let url = 'https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8';
      try {
          let res = await fetch(url);
          let data = await res.json();
          return data;
      } catch (error) {
          console.log(error);
      }
  }
  
  async function renderData() {
    let res = await getData();
    let data = res.data.products;
    let html = '';
    data.forEach(item => {
      html += `<div class="Items">
      <img class ="item--img" src="${item.imageURLs[0]}" >
      <p class="item--description">${item.fulhausProductName}</p>
      <p class="item--price">$${item.retailPrice} ${item.orderCurrency}</p>
      </div>`;
      let container = document.querySelector('.products');
      container.innerHTML = html;
    })
  }
  renderData();
 
  },[]);
   
 
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <div className='products'></div>
    </div>
  );
}

export default App;
