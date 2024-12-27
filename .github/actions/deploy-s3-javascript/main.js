const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run(){
    //Get Some input files
    const bucket = core.getInput('bucket', { require: true });
    const bucketRegion = core.getInput('bucket-region', { require: true });
    const distFolder = core.getInput('dist-folder', { require: true });
    
    github.getOctokit

    // Upload files
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
    
    core.notice('Hello From My Custom java Script Actions!.');
    const websiteUrl = `https://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
    core.setOutput('website-url', websiteUrl)//::set-output
}

run();