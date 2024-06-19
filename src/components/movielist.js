function MovieList(props) {
    // const data=[
    //     {"id":1, "name":"ABC", "type":"Action1", "desc":"Test1"},
    //     {"id":2, "name":"DEF", "type":"Action2", "desc":"Test2"},
    //     {"id":3, "name":"GHI", "type":"Action3", "desc":"Test3"}
    // ];
    return (
        <div>
            <h1>{props.title}</h1>
            <table>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Type</th><th>Desc</th></tr>
                </thead>
                <tbody>
                    {props.movielist.map((obj, index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.type}</td>
                            <td>{obj.desc}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default MovieList;

