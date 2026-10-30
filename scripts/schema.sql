CREATE TABLE IF NOT EXISTS content (
 id text PRIMARY KEY,
 data text NOT NULL,
 revision integer NOT NULL DEFAULT 1,
 updated_at bigint NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
 hash text PRIMARY KEY,
 expires bigint NOT NULL
);
CREATE TABLE IF NOT EXISTS attempts (
 key text PRIMARY KEY,
 count integer NOT NULL,
 until bigint NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON sessions(expires);
CREATE INDEX IF NOT EXISTS attempts_expiry_idx ON attempts(until);
