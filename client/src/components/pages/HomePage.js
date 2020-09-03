import React ,{useState,useEffect}from "react";
import "./HomePage.css";
import Items from "../HomePageComponents/items";
import RawPage from "./RawPage";
import test from './test.jpg';
import {getCards} from '../../services/homeSetting'

export default function HomePage() {
  const [cards,updateCards]=useState([]);
  useEffect(()=>{
      async function fetch(){
          const temp = await getCards();
          updateCards(temp);
      }
      fetch();
  },[])
  return (
    <RawPage
      content={
        <React.Fragment>
          <section className="Landing">
          <div
            className="pic"
            style={{
                backgroundImage: `url(${test})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
            ></div>
        <div className="FilterFront"></div>
          </section>
          <section className="ShowOff">
          <h2 className="title">Hot Articles</h2>
          <div className="breaker"></div>
          <Items content={cards[1]} type={"article"} />
          <h2 className="title">Hot Projects</h2>
          <div className="breaker"></div>
          <Items content={cards[0]} type={"project"} />

          </section>
        </React.Fragment>
      }
    />
  );
}
