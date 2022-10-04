const core = require('@actions/core');
const exec = require("@actions/exec");

async function run() {
    try {
        console.log('1.-Principio');
        console.log('2.-core.getInput(version-type)');
        const versionType = core.getInput('version-type');
        
        const src = __dirname;
        console.log('3.-git_update con variable versionType');
        console.log(versionType);
        await exec.exec(`${src}/git_update.sh -v ${versionType}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
