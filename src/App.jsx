import './App.css'
import Button from "./components/Button.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";

import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";
function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button buttonType="button" handleClick={() => {
          }}>
            to the collection
          </Button>
          <Button buttonType="button" handleClick={() => {
          }}>
            shop all bags
          </Button>
          <Button buttonType="button" handleClick={() => {
          }} disabled>
            pre-orders
          </Button>
        </nav>
        <main>
          <Product
              label="Best Seller"
              imgSrc={bag1}
              altText="Bag1"
              imgText="The handy bag"
              price="€400,-"
          />
          <Product
              label="Best Seller"
              imgSrc={bag2}
              altText="Bag2"
              imgText="The stylish bag"
              price="€250,-"
          />

          <Product
              label="New collection"
              imgSrc={bag3}
              altText="Bag3"
              imgText="The simple bag"
              price="€300,-"
          />

          <Product
              label="New collection"
              imgSrc={bag4}
              altText="Bag4"
              imgText="The trendy bag"
              price="€150,-"
          />

        </main>
        <footer>
          <Tile
          titel="The Brand">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cupiditate atque est provident quam adipisci quis odio modi dolorum. Explicabo maxime neque adipisci commodi quisquam. </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cupiditate atque est provident quam adipisci quis odio modi dolorum. Explicabo maxime neque adipisci commodi quisquam. </p>
          </Tile>

            <Tile
            imgSrc={brand}
            altText="brand"
            />
            <Tile
                imgSrc={story}
                altText="ourStory"
            />
            <Tile
                titel="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cupiditate atque est provident quam adipisci quis odio modi dolorum. Explicabo maxime neque adipisci commodi quisquam. </p>
            </Tile>

        </footer>
      </>
  )
}

export default App
