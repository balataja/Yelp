import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import styles from './styles.module.css'

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

    onMarkerClick(item) {
        const {place} = item;
        const {push} = this.context.router;
        push('/map/detail/${place.place_id}')
    }

    render() {
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(
                this.props.children,
                {
                    google: this.props.google,
                    places: this.state.places,
                    loaded: this.props.loaded,
                    onMarkerClick: this.onMarkerClick.bind(this)
                }
            );
        }
        return (
            <div>
                <Map
                    google={this.props.google} 
                    onReady={this.onReady.bind(this)}
                    visible={false} 
                    className={styles.wrapper} >
                    <Header />
                    <Sidebar 
                        title={"Restaurants"}
                        places={this.state.places} />
                    <div className={styles.content} >
                        {children}
                    </div>
                </Map>
            </div>
        )
    }
}

Container.contextTypes = {
    router: React.PropTypes.object
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container)