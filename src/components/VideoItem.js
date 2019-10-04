import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {

    const [addStyle, addStyletoDiv]=useState(false);

    const onMouseEnter =(event)=> {
        addStyletoDiv(true);
    };

    const onMouseLeave=(event)=> {
      addStyletoDiv(false);
    };


    return(
        <Grid item xs={12}>
                <Paper style={{ display: 'flex', alignItems:'center', cursor:"pointer"}} onClick={() => onVideoSelect(video)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={addStyle ? 'podswietlenie' : null}>
                    <img style={{ marginRight:'20px' }} alt="thumbnail" src={video.snippet.thumbnails.default.url}/>
                    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Paper>
        </Grid>
    )
};

export default VideoItem;


