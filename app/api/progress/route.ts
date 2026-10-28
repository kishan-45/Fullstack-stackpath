import {z} from 'zod';
import {getDb} from '@/db';
import {progress} from '@/db/schema';
export async function GET(){try{return Response.json(await getDb().select().from(progress));}catch{return Response.json({error:'Unable to load progress'},{status:500});}}
export async function POST(req:Request){try{const b=z.object({id:z.string(),note:z.string(),done:z.boolean()}).parse(await req.json());if(typeof b.id!=='string'||!/^lesson-[0-5]$/.test(b.id)||typeof b.note!=='string'||b.note.length>10000||typeof b.done!=='boolean')return Response.json({error:'Invalid lesson'},{status:400});await getDb().insert(progress).values({id:b.id,done:b.done?1:0,note:b.note}).onConflictDoUpdate({target:progress.id,set:{done:b.done?1:0,note:b.note}});return Response.json({ok:true});}catch{return Response.json({error:'Unable to save progress'},{status:500});}}

