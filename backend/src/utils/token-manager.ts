import jwt from 'jsonwebtoken';


export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  const token = jwt.sign(payload, secret, { expiresIn: "7d" });

  return token;
}
