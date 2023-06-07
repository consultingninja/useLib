export async function load({locals}){

    const records = await locals.pb.collection('jobs').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record)=> {return {jobname:record.jobname,salary:record.salary}})

    return{
        records: results
    }
}