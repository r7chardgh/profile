import React from "react";
import Icon from "../components/Icon";
import ExpandBtn from "../components/ExpandBtn";
import useReveal from "../hooks/useReveal";
function Skills({ skills }) {
  const { isRevealed, setIsRevealed, isBtnShown } = useReveal();
  return (
    <div id="skills" className={`container ${isRevealed ? "reveal" : ""}`}>
      <h1 className="title">My skills...</h1>
      {skills?.length > 0 ? (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.id}>
              <div className="skill__header">
                <Icon id={skill.id} />
                <h2 className="skill__title">{skill.type}</h2>
              </div>
              {skill.items.map((item) => (
                <p className="skill__item" key={item.id}>
                  {item.name}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h2>No Skill is loaded</h2>
      )}
      {isBtnShown && (
        <ExpandBtn
          targetClass="#skills"
          toggle={setIsRevealed}
          isRevealed={isRevealed}
        />
      )}
    </div>
  );
}

export default Skills;
