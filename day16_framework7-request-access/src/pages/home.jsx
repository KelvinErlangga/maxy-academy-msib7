import React from "react";
import { Page, Navbar, NavLeft, NavTitle, NavRight, Link, Block, BlockTitle, List, ListItem, Button, Popup } from "framework7-react";

const HomePage = () => (
  <Page name="home" className="minimalist-page">
    {/* Top Navbar */}
    <Navbar className="minimalist-navbar">
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle>Dashboard</NavTitle>
      <NavRight>
        <Link iconIos="f7:person_fill" iconMd="material:person" panelOpen="right" />
      </NavRight>
    </Navbar>

    {/* Introduction Block */}
    <Block className="intro-block">
      <p>Hi! My name is Kelvin Erlangga, a student passionate about web development. Explore our latest products and offers below.</p>
    </Block>

    {/* Featured Products */}
    <BlockTitle>Featured Products</BlockTitle>
    <Block>
      <List>
        <ListItem title="Product 1" after="$550" link="/product/1" subtitle="Best-selling product" />
        <ListItem title="Product 2" after="$1200" link="/product/2" subtitle="New arrival" />
        <ListItem title="Product 3" after="$980" link="/product/3" subtitle="Limited edition" />
      </List>
    </Block>

    {/* Actions Block */}
    <Block className="actions-block">
      <Button fill className="minimalist-button" link="/cart/">
        View Cart
      </Button>
      <Button fill className="minimalist-button" link="/orders/">
        My Orders
      </Button>
      <Button fill loginScreenOpen="#my-login-screen" className="minimalist-button">
        Login
      </Button>
    </Block>

    {/* Login Popup */}
    <Popup id="login-popup" className="login-popup">
      <Block>
        <BlockTitle>Login</BlockTitle>
        <List>
          <ListItem input label="Username" type="text" placeholder="Your username" />
          <ListItem input label="Password" type="password" placeholder="Your password" />
        </List>
        <Block>
          <Button fill className="minimalist-button" popupClose>
            Submit
          </Button>
        </Block>
      </Block>
    </Popup>
  </Page>
);

export default HomePage;
