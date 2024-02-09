// eslint-disable-next-line react/prop-types
function Product({label, imgSrc,altText,imgText, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={imgSrc} alt={altText}/>
            <p>{imgText}</p>
            <h4>{price}</h4>

        </article>
    );
}

export default Product;