import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Importing styles
import HomeStyle from '../../pages/Home/Home.style';

const useStyles = makeStyles(HomeStyle as any);
const AlbumCard: React.FC<{
	item: any
}> = ({
	item
}) => {
		const classes = useStyles();
		return (
			<a href={item.artistViewUrl} target="_blank">
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={item.artworkUrl100}
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h6" component="h2" style={{ fontWeight: 'bold' }} >
								{item.trackName}
							</Typography>
							<Typography variant="body2" component="p">
								Artist: {item.artistName}
							</Typography>
							<Typography variant="body2" component="p">
								Genre: {item.primaryGenreName}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</a>
		)
	}
export default AlbumCard;