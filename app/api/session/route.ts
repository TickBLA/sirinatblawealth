import { authenticated,json } from '../../server';
export async function GET(req:Request){return json({authenticated:await authenticated(req)})}
