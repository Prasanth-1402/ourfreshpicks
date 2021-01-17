import React from 'react';
import './Home.css';
import Product from './Product';
import cookingOil from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/fortune.png';
import maida from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/maida.png';
import maggi from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/maggi.png';
import chakkiAtta from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/chakkiAtta.png';
import parleG from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/parle-G.png';
import sunflowerOil from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/goldWinner.png';
import almond from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/almond.png';
import badam from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/badam.png';
import boost from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/boost.png';
import surfExcel from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/surfExcel.png';
import surfExcelLiquid from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/surfExcelLiquid.png';
import Horlicks from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/Horlicks.png';
import Roses3 from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/3Roses.png';
import bru from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/bru.png';
import HorlicksChoco from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/HorlicksChoco.png';
import rin from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/rin.png';
import hit from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/hit.png';
import redLabel from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/redLabel.png';
import dishWash from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/dishWash.png';
import comfort from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/comfort.png';
import pooja from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/pooja.png';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-12/STF-Web-Adapt.jpg"
          alt="Demand"
        />

        <div className="home__row">
          <Product
            id="maida500g"
            title="Maida 500g"
            price={29.99}
            image={maida}
            rating={3}
          />
          <Product
            id="cook500l"
            title="Cooking Oil 1L"
            price={299.99}
            image={cookingOil}
            rating={4}
          />
          <Product
            id="maggiNoodlesMegaPack"
            title="Maggi Noodles MEGA Pack"
            price={89.99}
            image={maggi}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="chakkiAtta1kg"
            title="Chakki Aatta 1KG"
            price={259.99}
            image={chakkiAtta}
            rating={4}
          />
          <Product
            id="goldWinnerOil1L"
            title="Glod Winner Oil 1L"
            price={239.99}
            image={sunflowerOil}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="badam1kg"
            title="Badam 1KG"
            price={2599.99}
            image={badam}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="rinsoap200g"
            title="Rin Soap 200g"
            price={99.99}
            image={rin}
            rating={4}
          />

          <Product
            id="parleGmediumPack"
            title="Parle G"
            price={19.99}
            image={parleG}
            rating={4}
          />
          <Product
            id="boost250g"
            title="Boost 250g"
            price={249.99}
            image={boost}
            rating={2}
          />
          <Product
            id="surfExcel2kg"
            title="Surf Excel Powder 2KG"
            price={689.99}
            image={surfExcel}
            rating={5}
          />
          <Product
            id="surfExcelLiquid2l"
            title="Surf Excel Liquid 2L"
            price={489.99}
            image={surfExcelLiquid}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="horlicks750g"
            title="Horlicks 750g"
            price={799.99}
            image={Horlicks}
            rating={3}
          />
          <Product
            iid="almong1kg"
            title="Almond 1KG"
            price={1999.99}
            image={almond}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="hit400ml"
            title="Hit 400ml"
            price={299.99}
            image={hit}
            rating={3}
          />

          <Product
            id="3roses250g"
            title="3 Roses 250g"
            price={149.99}
            image={Roses3}
            rating={4}
          />
          <Product
            id="bru500g"
            title="Bru 500g"
            price={699.99}
            image={bru}
            rating={4}
          />
          <Product
            id="horlicks1kgChoco"
            title="Horlicks 1KG - Chocolate Flavour "
            price={699.99}
            image={HorlicksChoco}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="redLabel1kg"
            title="Red Label 1KG"
            price={299.99}
            image={redLabel}
            rating={5}
          />
          <Product
            id="dishwashBudgetPack"
            title="Dish Wash Soap 2+1"
            price={99.99}
            image={dishWash}
            rating={3}
          />
          <Product
            id="poojaOil1l"
            title="Pooja Oil 1L"
            price={249.99}
            image={pooja}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
