import { db,json,originOK,sha,cookie } from '../../server';
export async function POST(req:Request){if(!originOK(req))return json({error:'คำขอไม่ถูกต้อง'},403);const t=req.headers.get('cookie')?.match(/(?:^|;\s*)tick_session=([a-f0-9]{64})(?:;|$)/)?.[1];if(t)await db().prepare('DELETE FROM sessions WHERE hash=?').bind(await sha(t)).run();return json({ok:true},200,{'Set-Cookie':cookie('',req,0)})}
