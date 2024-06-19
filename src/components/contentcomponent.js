import AddMovie from "./addmovie";
import MovieList from "./movielist";
function ContentComponent() {
    return (
        <div style={{height:"300px"}}>
            <h1>Content</h1>
            <AddMovie ></AddMovie>
        </div>
    );
}

export default ContentComponent;