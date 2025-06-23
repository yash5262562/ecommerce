import logo from './logo.svg';
import './App.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import './index.css'
import Card from './components/Card';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import {useState} from 'react';

function App() {
  const[selectedCategory,setSelectedCategory]=useState(null);
  const[query,setQuery]=useState("")

  // const handleInputChange=(e)=>{
  //   setQuery(e.target.value);
  // }

  // const filteredItems=products.filter((product)=>
  // product.title.toLowerCase().includes(query.toLowerCase())!==-1
  
  // )
  // const handleChange=(e)=>{
  //   setSelectedCategory(e.target.value)

  // }
  // const handleClick=(e)=>{
  //   setSelectedCategory(e.target.value)
  // }
  // function filteredData(products,selectedCategory,query){
  //   let filteredProducts=products;
  //   if(query){
  //     filteredProducts=filteredItems;
  //   }
  //   //selected filtered
  //   if(selectedCategory){
  //     filteredProducts=filteredProducts.filter((product)=>
  //     product.category===selectedCategory ||
  //     product.color===selectedCategory ||
  //     product.company===selectedCategory ||
  //     product.newPrice===selectedCategory ||
  //     product.title===selectedCategory 

  //     )
  //   }
  //   return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
  //     <Card 
       
  //     img={img}
  //     title={title}
  //     star={star}
  //     reviews={reviews}
  //     newPrice={newPrice}
  //     prevPrice={prevPrice}
      
  //     />
  //   ))
  // }
  // //filtering input values
  // const result=filteredData(products,selectedCategory,query)

  const handleInputChange=(e)=>{
    setQuery(e.target.value);
  }

  const filteredItems=products.filter((product)=>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
  
  );
  const handleChange=(e)=>{
    setSelectedCategory(e.target.value)

  }
  const handleClick=(e)=>{
    setSelectedCategory(e.target.value)
  }

  function filteredData(products,selectedCategory,query){
    let filteredProducts=products;
    if(query){
      filteredProducts=filteredItems
    }
    if(selectedCategory){
      filteredProducts=filteredProducts.filter((product)=>
      product.title===selectedCategory ||
      product.newPrice===selectedCategory ||
      product.company===selectedCategory ||
      product.color===selectedCategory ||
      product.category===selectedCategory
      
      );
    }
    return filteredProducts.map(({img,reviews,star,title,newPrice,prevPrice})=>(
      <Card 
      img={img}
      reviews={reviews}
      star={star}
      title={title}
      newPrice={newPrice}
      prevPrice={prevPrice}

      
      
      
      />
    ))


  }
  const result=filteredData(products,selectedCategory,query)
  
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended query={query} handleClick={handleClick} />
      <Products result={result} />
      
      
      
    </div>
  );
}

export default App;
