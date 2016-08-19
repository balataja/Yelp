import React from 'react'
import styles from './styles.module.css'
import Map, { Marker } from 'google-maps-react'

export class MapComponent extends React.Component {
    renderMarkers() {
        return this.props.places.map(place => {
            return <Marker ke={place.id}
                name={place.id}
                place={place}
                position={place.geometry.location} />
        })
    }

    render() {
        return (
            <div>
                <Map google={this.props.google}
                    className={styles.map} >
                    {this.renderMarkers()}
                </Map>
            </div>
        )
    }
}

export default MapComponent