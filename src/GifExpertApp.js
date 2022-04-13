import React ,{useState} from 'react';
import { AddCategory } from './Components/AddCtategory';
import { GifGrid } from './Components/GifGrid';

const GiftExpertApp = () => {
    
    //const categories = ['one ponch', ' dragn ball', 'Samurai X'];
    const [categories, setCategories] = useState([])

   

    return ( 
        <>
            <h2>GiftExpertAPP</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {
                   categories.map(category => <GifGrid key={category} category={category}/>)
                }
            </ol>

            
        </>
     )
    
}
 
export default GiftExpertApp;