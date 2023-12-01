//* LAS PROMESAS SON OBJETOS

let promise = {
  status: "pending",
  resolve: null
}

//* RESOLVE
promise = {
  status: "fulfilled",
  resolve: "data"
}

//! REJECT
promise = {
  status: "rejected",
  resolve: "Motivo del rechazo"
}

promise
  .then(
    //* succesHandler (function (data) { return newData })
    //! errorHandler (function (error) { error })
  )
  .then(
    //* succesHandler (function (data) { data })
    //! errorHandler (function (error) { error })
  )
  .then(
    null,
    //! errorHandler (function (error) { error })
  )
  .catch(
    //! errorHandler (function (error) { error })
  )
  .finally(() => { /* Aquí el código */ })

const fs = require("fs");

const newPromise = new Promise((resolve, reject) => {
  fs.readFile(__dirname + "/archivo.txt", "utf-8", (error, data) => {
    if(error) reject(error);
    else resolve(data)
  })
})

//* newPromise ES UNA INSTANCIA DE "Promise"
newPromise.then(
  //* succesHandler (function (data) { data })
  //! errorHandler (function (error) { error })
)
