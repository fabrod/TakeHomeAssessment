import { Answer } from './Answer';

export function Answers(props) {
  return (
    <div style={{ backgroundColor: "gray" }}>
      {props.answers.map((answer, index) => <Answer key={index} answer={answer} />)}
    </div>
  );
}