const Database = require("./db.js");
const createProffy = require("./createProffy.js");

Database.then(async (db) => {
  // Insert datas
  proffyValue = {
    name: "Mayk Brito",
    avatar:
      "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "88888888888",
    bio:
      "Entusiasta das melhores tecnologias de educação fisica avançada.<br/><br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200000 pessoas já passaram por uma das minhas explosões.",
  };

  classValue = {
    subject: 1,
    cost: "20",
    // O proffy_id virá pelo bando de dados
  };

  classScheduleValues = [
    // class_id virá pelo banco de dados
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Consult the data entered
  // All the proffys
  const selectedProffys = await db.all(" SELECT * FROM proffys")
  // console.log(selectedProffys)

  // Consult the classes of a certain teacher along with his data
  const selectedClassesandProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectedClassesandProffys)

  // time_from need to be before or equal to the requested time
  // time_to need to be above
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "1120"
  `)
  // console.log(selectClassesSchedules)
});
