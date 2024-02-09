
// eslint-disable-next-line react/prop-types
function Tile({imgSrc, altText, titel, children}) {
    return (
        <section>
            {imgSrc && <img src={imgSrc} alt={altText}/> }
            <h2>{titel}</h2>
            {children}
        </section>

    );
}

export default Tile;