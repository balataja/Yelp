import React from 'react'
import {Route} from 'react-router'
import Container from './Container'
import MapComponent from './Map/MapComponent'

export const makeMainRoutes = () => {
    return (
        <Route path="/" component={Container} >
            <Route path="map" component={MapComponent} />
            <Route path="detail/:placeId" component={Detail} />
        </Route>
    )
}

export default makeMainRoutes;