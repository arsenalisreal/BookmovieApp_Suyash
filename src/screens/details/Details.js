import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import Header from '../../common/header/Header'

class Details extends Component{
    render() {
        return (
            <div className="details">
                <Header id={this.props.match.params.id} baseUrl={this.props.baseUrl} showBookShowButton="true" />
            </div>
        )
    }
}

export default Details;