import React from 'react'
import { Link, Route } from 'react-router-dom'

const more = () => (<div>more</div>)

export default function Page1(props) {
    console.log(props)
    const { id } = props.match.params;

    return (
        <div>
            Page {id}
            <ul>
                <li><Link to='morePage'>morepage</Link></li>
            </ul>
            <Route path='/morePage' component={more} />
        </div>
    )
}
