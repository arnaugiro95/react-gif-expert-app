import React from 'react'
import { GiftGridItem } from './GiftGridItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs(category);
  


    return (
        <>
            <h3 className=' animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p>Loading</p>}

            <div className='card-grid'>

                {
                    images.map((img) => <GiftGridItem
                        key={img.id}
                        {...img}
                    />)
                }

            </div >
        </>
    )
}