import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import ButtonCard from "./components/reactstrap/ButtonCard";

const App: React.FC = () => {
    return(
        <div>

            <div className = "flex-wrap-gap">
                <ButtonCard
                type="card1"
                image="https://via.placeholder.com/213x167"
                title="My"
                subtitle="Calendar"
                icon={<FaCalendarAlt />}
                link="#"
                />
                <ButtonCard
                type="card2"
                image="https://via.placeholder.com/213x167"
                title="My"
                subtitle="Calendar"
                icon={<FaCalendarAlt />}
                link="#"
                />
                <ButtonCard
                type="card3"
                image="https://via.placeholder.com/213x167"
                title="My"
                subtitle="Calendar"
                icon={<FaCalendarAlt />}
                link="#"
                />

            </div>

        </div>
    );
    
}

export default App;

