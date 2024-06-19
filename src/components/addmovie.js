import React from "react";  //to create class component
import MovieList from "./movielist";
import 'bootstrap/dist/css/bootstrap.css';


class AddMovie extends React.Component {
    //every class component must be render method()
    constructor() {
        //variables in constructor are related to class 
        super();            //to access parent class objects
        this.state={
            id:123,
            movieName:'',
            movieType:'',
            movieDesc:'', 
            movielist:[]
        }
        this.readMovieName=this.readMovieName.bind(this);
        this.readMovieDesc=this.readMovieDesc.bind(this);
        this.readMovieType=this.readMovieType.bind(this);
        this.addMovie=this.addMovie.bind(this);
    }

    readMovieName(e){
        this.setState({movieName:e.target.value});
    }
    readMovieType(e){
        this.setState({movieType:e.target.value});
    }
    readMovieDesc(e){
        this.setState({movieDesc:e.target.value});
    }

    addMovie() {
        //this.state.movielist.push({"name":this.state.movieName, "type":this.state.movieType, "desc":this.state.movieDesc});
        //this.setState({movielist:this.state.movielist});
        //alert('Movie details added:'+this.state.movieName+','+this.state.movieType+','+this.state.movieDesc);
        fetch("http://localhost:3001/movies", {
            method:"POST", 
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify({"name":this.state.movieName, "type":this.state.movieType, "Desc":this.state.movieDesc})
        }).then(res=>res.json()).then(result=>alert(result.id)).catch(err=>alert(err))

        //how to get all the records from server/service
        fetch("http://localhost:3001/movies")
        .then(res=>res.json())
        .then(result=>{this.setState({movielist:result})})
    }

    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({id:126, movieName:"XYZ", movieDesc:"TUV", movieType:"Drama" });
        // }, 5000)

    }
    render(){
        return(
            <div>
                <h2>Movie Entry</h2>
                {/* {this.state.id} <br/>
                {this.state.movieName}  <br />
                {this.state.movieDesc}  <br />
                {this.state.movieType}  <br /> */}
                <form>
            <div class="form-group">
              <label>Movie Name</label>
              <input id="txtname" type="text" value={this.state.movieName} onChange={this.readMovieName} class="form-control" />
            </div>
            <div class="form-group">
              <label>Movie Desc</label>
              <input id="txtdesc" type="text" value={this.state.movieDesc} onChange={this.readMovieDesc} class="form-control" />
            </div>
            <div class="form-group">
              <label>Movie Type</label>
              <input id="txttype" type="text" value={this.state.movieType} onChange={this.readMovieType} class="form-control" />
            </div>
            <input type="button" value="Save" onClick={this.addMovie} class="btn btn-primary" />
            <input type="button" value="Update" onclick="updateMovie()" class="btn btn-outline-primary" />
            <button class="btn btn-secondary">Reset</button>
          </form>
            {/* {
                this.state.movielist.map((obj)=>{
                    <div>{obj.name}</div>
                })
               } */}
            <MovieList title="Movie List" movielist={this.state.movielist}></MovieList>
            </div>
        );
    }
}

export default AddMovie;