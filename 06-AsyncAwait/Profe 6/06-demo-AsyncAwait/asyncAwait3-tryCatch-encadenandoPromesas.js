const axios = require("axios");

// axios.get("https://rickandmortyapi.com/api/character/3")
//   .then(({ data }) => console.log("then:", data.name))

//* Necesito "async"
const getChar = async (id) => {
  try {
    console.log(estaVariableNoExiste);
    //! Código asíncrono => SIEMPRE TRY-CATCH
    const { data } = await axios.get("https://rickandmortyapi.com/api/characterror/" + id)
    console.log("AsyncAwait:", data.name, data.id);
  } catch (error) {
    console.log(error.message);
  }
}

const getChars = async () => {
  await getChar(1);
  await getChar(2);
  await getChar(3);
  await getChar(4);
}

getChars();