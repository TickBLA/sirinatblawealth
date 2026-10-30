import {neon} from '@neondatabase/serverless';
function client(){const url=process.env.DATABASE_URL;if(!url)throw new Error('DATABASE_URL is not configured');return neon(url)}
function parameters(query:string){let n=0;return query.replace(/\?/g,()=>'$'+(++n))}
class Statement{
 constructor(readonly query:string,readonly values:unknown[]=[]){ }
 bind(...values:unknown[]){return new Statement(this.query,values)}
 async first<T=Record<string,unknown>>():Promise<T|null>{const r=await client().query(parameters(this.query),this.values);return (r[0] as T)||null}
 async run(){const r=await client().query(parameters(this.query),this.values,{fullResults:true});return {meta:{changes:r.rowCount??0}}}
}
export function database(){return {prepare:(s:string)=>new Statement(s),batch:async(statements:Statement[])=>{const sql=client();return sql.transaction(statements.map(s=>sql.query(parameters(s.query),s.values)))}}}
