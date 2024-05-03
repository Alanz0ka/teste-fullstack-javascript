import jwt from 'jsonwebtoken';
import { secretKey } from '../config.js'; 

function authenticateJwt(req, res, next) {
    // Verificar se o token está presente no cabeçalho de autorização
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    // Extrair o token JWT da string de cabeçalho
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secretKey);
        req.userID = decoded.userId;
        next();
    } catch (error) {
        console.error('Erro ao verificar o token:', error.message);
        return res.status(401).json({ error: 'Token inválido' });
    }
}

export { authenticateJwt };
