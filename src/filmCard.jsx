function FilmCard(props){
    return(
        <div className="Card-Film">
            <img src={props.FilmPhoto} className="img-of-card"/>
            <h2>{props.NameOfFilm}</h2>
            <button className="btn"><a href={props.FilmsLink} style={{color:'white',textDecoration:'none'}}>See it</a></button>
        </div>
    );
}
export default FilmCard;