/**
 * Created by stevenwestermire on 8/10/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel, Image} from 'react-bootstrap';


//TODO: Actually consider breaking up city list into its own component

class World_Map extends Component {

    constructor(props){
        super(props)

   }

    render(){

        return (
            <Image
                src="../../public/images/world_map.png"
                height="512"
                width="100%"
            />
        );
   }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(World_Map);