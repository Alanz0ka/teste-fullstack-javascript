function authenticateJwt(req, res, next) {
    // Verificar se o token está presente no cabeçalho de autorização
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        // Verificar e decodificar o token
        const decoded = jwt.verify(token, secretKey);
        // Extraia o userID do payload do token
        req.userID = decoded.userId;
        // Chame o próximo middleware
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}

export { authenticateJwt };