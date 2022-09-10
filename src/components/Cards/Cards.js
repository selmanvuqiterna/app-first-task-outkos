import "./cards.css";

function Cards({id,version,label,name,description,button,img}) {

    return(
        <div className="card-style">
            <h4 className="version">{version}</h4>
            <div className="label">{label}</div>
           <div className="name"> 
                <h3 className="title">{name}</h3>
                <img src={img} alt="" className="image" />
           </div>
            <h5 className="description">{description}</h5>
            <button className="button">{button}</button>
        </div>
    )
}

export default Cards;