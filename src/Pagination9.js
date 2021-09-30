import React from 'react'

const Pagination = ({text,pageHandler}) => {
    let pageNumbers = [];
    for (let i=1;i< Math.ceil(text.length/10)+1;i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <center>
                {pageNumbers.map(number => <div onClick={()=> pageHandler(number)}>{number}</div>)}
            </center>
        </div>
    )
}

export default Pagination
