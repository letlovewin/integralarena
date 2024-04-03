export function load({ params }) {
    let cid = params.cid;
    if(cid!="+layout.svelte") { //Weird errors would pop up where the pid would be +layout.svelte somehow. Don't touch
        return {
            information: {
                contest_id: cid,
            }
        }
    }
}