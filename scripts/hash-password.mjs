import {randomBytes,pbkdf2Sync} from 'node:crypto';
if(!process.stdin.isTTY)throw Error('Run in an interactive terminal');
process.stdout.write('Password (hidden): ');process.stdin.setRawMode(true);process.stdin.resume();let p='';
process.stdin.on('data',chunk=>{for(const c of chunk.toString()){if(c==='\u0003'){process.stdin.setRawMode(false);process.exit(1)}if(c==='\r'||c==='\n'){process.stdin.setRawMode(false);process.stdin.pause();if(!p){console.error('\nPassword cannot be empty');process.exit(1)}const salt=randomBytes(16).toString('hex');console.log('\nSet ADMIN_PASSWORD_HASH to:\n'+salt+':'+pbkdf2Sync(p,salt,100000,32,'sha256').toString('hex'));process.exit(0)}if(c==='\u007f')p=p.slice(0,-1);else p+=c}});
