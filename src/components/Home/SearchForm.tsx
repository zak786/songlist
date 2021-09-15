import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Importing styles
import HomeStyle from '../../pages/Home/Home.style';

//redux
import { connect } from "react-redux";
import { fetchAlbums } from "../../store/albums/actions";

const useStyles = makeStyles(HomeStyle as any);
const SearchForm: React.FC<{
	fetchAlbums: Function;
	onSubmit: Function;
}> = ({
	fetchAlbums,
	onSubmit
}) => {
		const [searchText, setSearchText] = useState<string>("");
		const classes = useStyles();
		const handleSearch = async (e: any) => {
			try {
				e.preventDefault();
				fetchAlbums(searchText, 10, 0);
				onSubmit(searchText);
			} catch (err) {
				console.log(err);
			}
		}
		return (
			<div className="search">
				<form action="" onSubmit={handleSearch}>
					<TextField
						id="outlined-basic"
						variant="outlined"
						className={classes.search}
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						required
					/>
					<Button
						variant="contained"
						className={classes.searchbtn}
						type="submit"
					>
						Search
					</Button>
				</form>
			</div>
		)
	}
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = {
	fetchAlbums
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);