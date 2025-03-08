import { useEffect, useState } from "react";
import Card from "./components/Card";

function TestApi() {
  //   const [users, setUser] = useState([]);
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      //   .then((data) => setUser(data.results))
      .then((data) => setCard(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-row gap-4 ">
      {cards.map(
        (card, index) => (
          <Card
            key={index}
            title={card.name.first}
            description={card.name.last}
            image={card.picture.large}
          />
        )
        //   {
        //     return (
        //       <div key={index}>
        //         <h2>
        //           {user.name.first} {user.name.last}
        //         </h2>
        //       </div>
        //     );
        //   }
      )}
    </div>
  );
}
export default TestApi;
