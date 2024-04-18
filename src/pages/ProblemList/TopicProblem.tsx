import { ProblemData } from "../../types/problem.types";

export default function TopicProblem({
  topicName,
  problems,
}: {
  topicName: string;
  problems: ProblemData[];
}) {
  return (
    <div className="collapse collapse-arrow bg-gray-600 my-4 px-2">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium flex justify-between items-center">
        <span>{topicName}</span>{" "}
        <progress
          className="progress progress-warning w-56"
          value="10"
          max="100"
        ></progress>
      </div>

      <div className="collapse-content">
        {problems.map((problem: ProblemData) => (
          <a
            className="block"
            key={problem.url}
            href={problem.url}
            target="_blank"
          >
            {" "}
            {problem.title}{" "}
          </a>
        ))}
      </div>
    </div>
  );
}
