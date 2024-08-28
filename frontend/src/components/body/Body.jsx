import { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from "./body.module.css";
export default function Body() {
  const [cards, setCards] = useState([
    { title: "This is title", description: "This is description" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getcards");
        if (response.status === 200) {
          const Cards = await response.json();
          if (!Cards || Cards.Cards.length === 0) {
            console.log("Cards not avalilable");
          } else {
            setCards(Cards.Cards);
          }
        } else console.log("Server Error");
      } catch (e) {
        console.log(e, "Server Error");
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.bodyContainer}>
      {cards.length === 0 ? (
        <div className={styles.noCards}> No Cards Found</div>
      ) : (
        cards.map((item, index) => (
          <Card title={item.title} description={item.description} />
        ))
      )}
      {/* <Card
        title={"This is title Container"}
        description={"This is description Container"}
      />
      <Card
        title={"This is title Container"}
        description={"This is description Container"}
      />
      <Card
        title={"This is title Container"}
        description={"This is description Container"}
      />
      <Card
        title={"This is title Container"}
        description={"This is description Container"}
      /> */}
    </div>
  );
}
