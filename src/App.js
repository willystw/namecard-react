import "./styles.css";
const skills = [
  {
    skillName: "Java",
    grade: "advanced",
    color: "lightyellow",
  },
  {
    skillName: "HTML",
    grade: "beginner",
    color: "lightblue",
  },
  { skillName: "SQL", grade: "intermediate", color: "green" },
];

const gradeIcons = {
  beginner: "🐈",
  intermediate: "🐣",
  advanced: "🐥",
};

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList skillList={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile_pic.png" />;
}

function Intro() {
  return (
    <>
      <h1> Willy </h1>
      <span>I love Kiiroitori</span>
    </>
  );
}

function SkillList({ skillList }) {
  return (
    <div className="skill-list">
      {skillList.map((data, i) => (
        <Skill
          color={data.color}
          name={data.skillName}
          grade={data.grade}
          key={i}
        />
      ))}
    </div>
  );
}

function Skill({ color, name, grade }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{gradeIcons[grade]}</span>
    </div>
  );
}
