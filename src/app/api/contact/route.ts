import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: any) {;
    try {
            const body = await req.json();
        
            const db = path.join(process.cwd(), 'data', 'database.json');
            const data = JSON.parse(fs.readFileSync(db, { encoding: 'utf8', flag: 'r' }));
            const id = data.length + 1;

            const newContact = {
                id: id,
                name: body.name,
                phone: body.phone,
                email: body.email,
                message: body.message
            };

            data.push(newContact);
            fs.writeFileSync(db, JSON.stringify(data, null, 2));

            return NextResponse.json({success: true})
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' })
    }
}
