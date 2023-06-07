import pocketbase from 'pocketbase';
import { OAuth2Client } from 'google-auth-library';
import { MongoClient } from 'mongodb';
import {SECRET_CLIENT_ID,SECRET_CLIENT_SECRET, SECRET_URI,SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';

export const pb = new pocketbase('http://127.0.0.1:8090');
await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
const redirectURL = '/'
export const authClient =  new OAuth2Client(
    SECRET_CLIENT_ID,
    SECRET_CLIENT_SECRET,
    redirectURL
  );

export const mongo = new MongoClient(SECRET_URI);