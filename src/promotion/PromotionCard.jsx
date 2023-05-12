import '../App.css';

function PromotionCard(props) {


    return (
        <div className='promotion__card'>
            <img className='promotion__card-img' src={props.cardSrc} alt={props.cardAlt} />
            <p className='promotion__card-name' style={{ background: props.cardName === "Новинка" ? "#FF4D6D" : "#8CC4EC" }}>{props.cardName}</p>
            <p className='promotion__card-text' style={{ background: props.cardName === "Новинка" ? "#FF4D6D" : "#8CC4EC" }}>{props.text}</p>
        </div>
    );
}

export default PromotionCard;


