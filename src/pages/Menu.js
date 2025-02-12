import React from 'react';
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import '../pages/Menu.css';
import ListMenu from "../components/ListMenu";
import { dataMenuLunch,dataMenuDesserts } from '../data/Data';

function Menu() {
  const menuSections = [
    { id: "lunch", title: "Lunch", data: dataMenuLunch },
    { id: "desserts", title: "Desserts", data: dataMenuDesserts },
  ];
  return (
    <section className="main-menu">
        <section className="hero">
            <Hero />
        </section>
        <div className="menu">
            <div>
                <h1>Menu</h1>
                <ListMenu />
            </div>
            {menuSections.map((section) => (
        <section key={section.id} id={section.id}>
          <Cards data={section.data} />
        </section>
      ))}
        </div>
    </section>
  );
}

export default Menu;