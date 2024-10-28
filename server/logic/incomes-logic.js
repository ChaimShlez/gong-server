let incomesDal = require("../dal/incomes-dal");

async function getIncomes() {
  try {
    
    let incomes = await incomesDal.getIncomes();
    return incomes;
  } catch (error) {
    throw new Error("Failed to retrieve incomes: " + error.message);
  }
}



module.exports = {
  getIncomes
};
