import { CardActionArea } from "@mui/material";
import MuiCard from "@mui/material/Card";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import cardType from "../../models/types/cardType";
import CardActionBar from "./CardActionBar";
import CardBody from "./CardBody";
import CardHead from "./CardHead";


const Card = ({ card, handleDeleteCard, handleLikeCard }) => {

  const navigate = useNavigate(); 


  return (

    <MuiCard sx={{ minWidth: 280, maxWidth: 350 }}>
      <CardActionArea sx={{ p: 2 }}
      onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card}></CardBody>
      </CardActionArea>
      <CardActionBar
        cardId={card._id}
        handleDeleteCard={handleDeleteCard}
        handleLikeCard={handleLikeCard}
      />
    </MuiCard>
  );
};

Card.propTypes = {
  card: cardType.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
}

export default Card;
