import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from "./components";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        width: window.innerWidth
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    componentDidMount() {
        this.handleSubmit("javaScript");
    }

    onVideoSelect = (video) =>{
        this.setState({ selectedVideo: video });
    };

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: '5',
                    // key:'AIzaSyD6xbdNknive6GNzVsRfKBUSLCMvnVS_HQ',
                    q: searchTerm
                }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };


    render() {
        const { selectedVideo, videos, width } = this.state;
        const isMobile = width <= 500;

        console.log(width);

        if(isMobile){
            console.log("Mobile",isMobile)
        } else {
            console.log("Desktop",isMobile)
        }

        return (
            <Grid justify="center" container spacing ={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar
                            onFormSubmit={this.handleSubmit}
                            />
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <VideoDetail
                                video={selectedVideo}
                            />
                        </Grid>
                        <Grid item sm={12} md={4} style={ isMobile ? {marginTop: '30%'}:null }>
                            <VideoList
                            videos={videos}
                            onVideoSelect={this.onVideoSelect}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
