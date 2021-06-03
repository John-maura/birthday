import React from 'react';
const list= ({people}) =>{
    return(
        <>
    {people.map((person)=>{
            const{id,Name,age,image}=person;
            return <article key={id} className="person">
         <img src={image} className="img-fluid rounded mx-auto d-block rounded-circle" height="100" width="100" alt={Name}/>
        <div>
            <h4 className="text-center">{Name}</h4>
            <p className="text-center">{age} years</p>
        </div>
    </article>
        })}
        </>
    );
};
export default list;