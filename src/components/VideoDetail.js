import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

const VideoDetail = ({ video }) => {
    const classes = useStyles();
    if(!video) return <div> <CircularProgress className={classes.progress} /></div>
    const videoSrc =`https://youtube.com/embed/${video.id.videoId}`;

    console.log(video);
    return(
        <React.Fragment>
            <Paper elevation={6} style={{height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
};

export default VideoDetail;
