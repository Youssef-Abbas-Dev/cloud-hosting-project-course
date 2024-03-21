import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { JWTPayload } from '@/utils/types';

// Verify Token For API End Point
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

// Verify Token For Page
export function verifyTokenForPage(token: string): JWTPayload | null {
    try {
        const privateKey = process.env.JWT_SECRET as string;
        const userPayload = jwt.verify(token, privateKey) as JWTPayload;
        if(!userPayload) return null;

        return userPayload;
    } catch (error) {
        return null;
    }
}