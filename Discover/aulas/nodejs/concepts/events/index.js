const { EventEmitter } = require("events");

class Character extends EventEmitter {
  Character(name) {
    this.name = name;
  }
}

const chapolin = new Character("Chapolin");
chapolin.on("help", () => console.log(`Eu? o ${chapolin.name} colorado!`));

console.log("E agora? Quem poderá me defender?");

chapolin.emit("help");
