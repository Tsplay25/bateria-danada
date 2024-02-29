import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';



export async function POST(req: NextApiRequest, res: NextResponse) {
    try {
        console.log(req.body);
        
        if (req.method === 'POST') {
            const { name, phone, email, message } = req.body;

            const db = path.join(process.cwd(), 'data', 'database.json');
            const data = JSON.parse(fs.readFileSync(db, { encoding: 'utf8', flag: 'r' }));
            const id = data.length + 1;

            const newContact = {
                id: id,
                name: name,
                phone: phone,
                email: email,
                message: message
            };

            data.push(newContact);
            fs.writeFileSync(db, JSON.stringify(data, null, 2));

            return NextResponse.json({success: true})
        } else {
            return NextResponse.json({ error: 'Method Not Allowed' })
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' })
    }
}
