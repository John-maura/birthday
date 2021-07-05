import React from 'react';
const list= ({people}) =>{
    return(
        <>
    {people.map((person)=>{
            const{id,Name,age,image}=person;
            return <article key={id} className="person">
         <img src={image} className='person' alt={Name}/>
        <div>
            <h4 className="text-center">{Name}</h4>
            <p>{age} years</p>
        </div>
    </article>
        })}
        </>
    );
};
export default list;