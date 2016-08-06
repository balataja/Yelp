import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'

export class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
            pagination: null
        }
    }

    onReady(mapProps, map) {
        searchNearby(
            this.props.google,
            map,
            {
                location: map.center,
                radius: '500',
                types: ['cafe']
            }
        ).then((results, pagination) => {
            this.setState({
                places:results,
                pagination
            })
        }).catch((status) => {
            console.log('error fetching nearby', status)
        })
    }

    render() {
        return (
            <div>
                Hello from the container
                <Map
                    google={this.props.google} 
                    onReady={this.onReady.bind(this)}
                    visible={false} />
                {this.state.places.map(place => {
                    return (<div key={place.id}>{place.name}</div>)
                })}
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container)