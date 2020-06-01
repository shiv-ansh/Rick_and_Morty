import React from 'react'

function Pagination(props) {

    let pages = [];

    // console.log("pagination", props)

    //creating a page array
    for (let i = 1; i <= props.pages; i++) {
        pages.push(i);
    }
    return (
        <nav >
            <ul className="pagination pagination-md">
                {pages.map(ele => (<li key={ele} className="page-item"><button className="page-link" onClick={() => props.handleClick(ele)}>{ele}</button></li>))


                }
            </ul>
        </nav>
    )
}

export default Pagination
