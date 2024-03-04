import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { JWTPayload } from '@/utils/types';

export function verifyToken(request: NextRequest): JWTPayload | null {
    try {
        const jwtToken = request.cookies.get("jwtToken");
        const token = jwtToken?.value as string;
        if (!token) return null;

        const privateKey = process.env.JWT_SECRET as string;
        const userPayload = jwt.verify(token, privateKey) as JWTPayload;

        return userPayload;
    } catch (error) {
        return null;
    }
}