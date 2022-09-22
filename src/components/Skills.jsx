import React from "react";

const Skills = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="skills">
        <div>
          <h3>Programming Languages</h3>
          <a
            href="https://lenguajejs.com/javascript/"
            target="_blank"
            title="JavaScript"
          >
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
          </a>
          <a href="https://www.python.org/" target="_blank" title="Python">
            <img src="https://img.shields.io/badge/Python-F7DF1E?style=for-the-badge&logo=python&logoColor=black" />
          </a>
          <a href="https://www.java.com/" target="_blank" title="Java">
            <img src="https://img.shields.io/badge/Java-F7DF1E?style=for-the-badge&logo=java&logoColor=black" />
          </a>
        </div>
        <div>
          <h3>Frontend Development</h3>
          <a
            href="https://developer.mozilla.org/es/docs/Web/HTML"
            target="_blank"
            title="HyperText Markup Language"
          >
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
          </a>
          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            title="Cascading Style Sheets"
          >
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          </a>
          <a href="https://es.reactjs.org/" target="_blank">
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          </a>
          <a href="https://es.redux.js.org/" target="_blank">
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
          </a>
          <a href="https://mui.com/" target="_blank">
            <img src="https://img.shields.io/badge/Material UI-%258796.svg?style=for-the-badge&logo=material-ui&logoColor=white" />
          </a>
        </div>
        <div>
          <h3>Backend Development</h3>
          <a href="https://nodejs.dev/en/" target="_blank">
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
          </a>
          <a href="https://expressjs.com/es/" target="_blank">
            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <img src="https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B" />
          </a>
          <a href="https://mongoosejs.com/" target="_blank">
            <img src="https://img.shields.io/badge/Mongoose-00C58E?style=for-the-badge" />
          </a>
          <a href="https://www.postgresql.org/" target="_blank">
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
          </a>
          <a href="https://sequelize.org/" target="_blank">
            <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
          </a>
        </div>
        <div>
          <h3>Tools & Technologies</h3>
          <a href="https://git-scm.com/" target="_blank">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
          </a>
          <a href="https://www.postman.com/" target="_blank">
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
          </a>
          <a href="https://www.heroku.com/" target="_blank">
            <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
          </a>
          <a href="https://vercel.com/" target="_blank">
            <img src="https://img.shields.io/badge/vercel-f4f4f4?style=for-the-badge&logo=vercel&logoColor=white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
