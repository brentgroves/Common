function log (...args) {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
   // console.trace();
   try {
      throw new Error();
    } catch (error) {
      console.log(
    error
    .stack // Grabs the stack trace
    .split('\n')[2] // Grabs third line
    .trim() // Removes spaces
    .substring(3) // Removes three first characters ("at ")
//    .replace(__dirname, '') // Removes script folder path
    .replace(/\s\(./, ' at ') // Removes first parentheses and replaces it with " at "
    .replace(/\)/, '') // Removes last parentheses
      )
    }

  }
}

module.exports = {
    log
}
