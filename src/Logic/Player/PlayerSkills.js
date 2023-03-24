export default class PlayerSkills {
  constructor(role) {
    this.skillList = [];
    const { startingSkills } = role;
    this.skillList.push(...startingSkills);
  }
}
