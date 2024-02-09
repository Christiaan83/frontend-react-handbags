
// eslint-disable-next-line react/prop-types
function Tile({imgSrc, altText, title, children}) {
    return (
        <section>
            {imgSrc && <img src={imgSrc} alt={altText}/> }
            <h2>{title}</h2>
            {children}
        </section>

    );
}

export default Tile;