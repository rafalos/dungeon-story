import { auth } from "express-oauth2-jwt-bearer";

export const verifyToken = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUE_URL,
  tokenSigningAlg: 'RS256',
});
