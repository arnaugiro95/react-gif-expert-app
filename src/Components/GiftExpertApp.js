import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GiftGrid';


function GiftExpertApp() {


  const [categories, setCategories] = useState([])








  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {
          categories.map((category) =>
            <GifGrid
              key={category}
              category={category} />
          )}
      </ul>
    </>
  );
}

export default GiftExpertApp;
