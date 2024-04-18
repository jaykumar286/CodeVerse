import SampleProblemList from "../../constants/SampleProblemList";
import { ProblemData } from "../../types/problem.types";
import TopicProblem from "./TopicProblem";

type Topic = {
  topic: string;
  topicId: string;
  problems: ProblemData[];
};
export default function ProblemList() {
  return (
    <div className="flex justify-center items-center w-[100vw]">
      <div className="topic-list flex flex-col w-[60%]">
        {SampleProblemList.map((topic: Topic) => (
          <TopicProblem
            topicName={topic.topic}
            key={topic.topicId}
            problems={topic.problems}
          />
        ))}
      </div>
    </div>
  );
}
