import "./Bottom.css"

export default function Bottom({nameMovie,urlMovie,movieDate,movieDay}){

    return (
        <div className="bottom">
            <div className="bottomBox">
                <div className="boxImgBot"><img className="imgBottom" src={urlMovie}/></div>
                <div className="bottomData">
                    <h3>{nameMovie}</h3> 
                    <h3>{movieDay} - {movieDate}</h3>
                </div>
            </div>
            
        </div>
    )
}