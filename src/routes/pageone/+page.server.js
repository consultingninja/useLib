import pocketbase from 'pocketbase';
import { OAuth2Client } from 'google-auth-library';
import { MongoClient } from 'mongodb';
import {SECRET_CLIENT_ID,SECRET_CLIENT_SECRET, SECRET_URI,SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';

export async function load({}){
    const pb = new pocketbase('http://127.0.0.1:8090');
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const redirectURL = '/'
    const authClient =  new OAuth2Client(
        SECRET_CLIENT_ID,
        SECRET_CLIENT_SECRET,
        redirectURL
      );
    const mongo = new MongoClient(SECRET_URI)

    const records = await pb.collection('jobs').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record)=> {return {jobname:record.jobname,salary:record.salary}})

    return{
        records: results
    }
}