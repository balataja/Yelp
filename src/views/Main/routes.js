import React from 'react'
import {Route} from 'react-router'
import Container from './Container'
import Map from './Map/Map'

export const makeMainRoutes = () => {
    return (
        <Route path="/" component={Container} >
            <Route path="map" component={Map} />
        </Route>
    )
}

export default makeMainRoutes;