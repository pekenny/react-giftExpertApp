import React from 'react'
import { useFetchGift } from '../Hooks/useFetchGift'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGift(category);
    


    return (
        <>
            <h3>{category}</h3>
            {loading && 'Cargando...'}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>


    )
}
