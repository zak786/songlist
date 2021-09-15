import React, {useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from "react-infinite-scroller";

//Importing components
import NoResult from '../../components/Home/NoResult';
import SearchForm from '../../components/Home/SearchForm';
import AlbumCard from '../../components/Home/AlbumCard';

//redux
import { connect } from "react-redux";
import { fetchAlbums } from "../../store/albums/actions";

const Home: React.FC<{
  albums: any[];
  loading: boolean;
  offset: number;
  fetchAlbums: Function;
  hasMore: boolean
}> = ({
  albums,
  loading,
  fetchAlbums,
  hasMore,
  offset
}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
      <React.Fragment>
        <SearchForm 
          onSubmit={(value:string)=>setSearchTerm(value)}
        />
        {loading && (
          <CircularProgress />
        )}
        <div
          style={{ height: "calc(100vh - 100px)", overflow: "auto" }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              if(hasMore){
                fetchAlbums(searchTerm, 10, offset + 10)
              }
            }}
            hasMore={
              albums.length === 0 ? false : hasMore
            }
            loader={
              <div style={{ textAlign: "center", padding: 10 }}>
                <CircularProgress />
              </div>
            }
            useWindow={false}
          >
            <div className="list">
              {albums.length === 0 && (
                <NoResult />
              )}
              {albums.map((item, i) => (
                <AlbumCard key={i} item={item} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
const mapStateToProps = (state: any) => ({
  loading: state.albums.loading,
  albums: state.albums.albums,
  offset: state.albums.offset,
  hasMore: state.albums.hasMore,
});
const mapDispatchToProps = {
  fetchAlbums
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);