import React from 'react'
// import '../navbar_unit.css'
import Rainbow from '../hoc/Rainbow'


const Contact = () => {
    return (
        <div className="container">
            <h2 className="center">Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores aspernatur assumenda at ea illo iure maxime minus, molestias neque odio pariatur quae quasi quibusdam saepe tempore, veritatis vitae, voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quas quibusdam veniam? Dignissimos dolorem ea, excepturi ipsam minus nulla quod quos reiciendis repellendus rerum sit tempora tempore, ullam voluptates, voluptatibus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate distinctio dolore ex expedita ipsam, magnam modi necessitatibus, nisi nobis perspiciatis placeat possimus repellat rerum sequi similique sit voluptate voluptatibus?</p>
        </div>
    )
}

export default Rainbow(Contact)