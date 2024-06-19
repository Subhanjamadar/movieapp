function MovieEntry() {
  return (
    <form><div class="form-group">
    <label>Movie Name</label>
    <input id="txtname" type="text" value="" class="form-control" />
  </div>
  <div class="form-group">
    <label>Movie Desc</label>
    <input id="txtdesc" type="text" value="" class="form-control" />
  </div>
  <div class="form-group">
    <label>Movie Type</label>
    <input id="txttype" type="text" value="" class="form-control" />
  </div>
  <input type="button" value="Save" onclick="addMovie()" class="btn btn-primary" />
  <input type="button" value="Update" onclick="updateMovie()" class="btn btn-outline-primary" />
  <button class="btn btn-secondary">Reset</button></form>
            
          
      
  );
}

export default MovieEntry;
