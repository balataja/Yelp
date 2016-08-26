import React from 'react'
import styles from './styles.module.css'
import Map, { Marker } from 'google-maps-react'

export class MapComponent extends React.Component {
    renderChildren() {
        const {children} = this.props;

        if (React.Children.count(children) > 0) {
        return React.Children.map(children, c => {
            return React.cloneElement(c, this.props, {
            map: this.props.map,
            google: this.props.google
            })
        })
        } else {
        return this.renderMarkers();
        }
    }
    renderMarkers() {
        return this.props.places.map(place => {
            return <Marker ke={place.id}
                name={place.id}
                place={place}
                position={place.geometry.location} 
                onClick={this.props.onMarkerClick.bind(this)}/>
        })
    }

    render() {
        return (
            <div>
                <Map google={this.props.google}
                    className={styles.map} >
                    {this.renderChildren()}
                </Map>
            </div>
        )
    }
}

export default MapComponent