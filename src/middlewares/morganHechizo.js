const morganHechizo = (req, res, next) => {
  const parametros = req.params;
  const headers = req.headers;
  const body = req.body;
  const url = req.url;

  console.log(
    `
      Hoy ${new Date()}
      Se ha recibido una consulta en la ruta ${JSON.stringify(url)}
      acompañado de:
      - Los siguientes parametros: ${JSON.stringify(parametros)}. 
      - Los siguientes headers: ${JSON.stringify(headers)}.
      - El siguiente cuerpo: ${JSON.stringify(body)}.
      `
  );
  return next();
};

module.exports = { morganHechizo };
