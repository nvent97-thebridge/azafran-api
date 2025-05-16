const auth = (req, res, next) => {
    // Recoger el token del header Authorization
    // Si no hay token => 401
    // Verificar token con jwt secret
    // Obtener el userId del payload
    // Prevenir edge case: Find de ese user by userId
    // Guardo user en la request
    // para recogerlo en los controllers y asi
    // identificar al usuario que hizo la request
    next();
};

module.exports = { auth };
