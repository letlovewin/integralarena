/*

    @File: +page.js for people/[uid]
    @Author: Gray
    @Date of creation: 3/21/24

*/

/**
 * 
 * @param {uid} param0 
 * @returns username that was inputted
 */

export function load({ params }) {
    let pid = params.uid;
    if(pid!="+layout.svelte") { //Weird errors would pop up where the pid would be +layout.svelte somehow. Don't touch
        return {
            information: {
                username: pid,
            }
        }
    }
}