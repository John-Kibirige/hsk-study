import ChoiceQuestion from "./ChoiceQuestion.jsx";
import OrderQuestion from "./OrderQuestion.jsx";

export default function QuizItem({ item, onAnswer }) {
  return item.words ? <OrderQuestion item={item} onAnswer={onAnswer} /> : <ChoiceQuestion item={item} onAnswer={onAnswer} />;
}
