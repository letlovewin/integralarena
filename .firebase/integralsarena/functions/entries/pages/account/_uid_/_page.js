function load({ params }) {
  let pid = params.uid;
  if (pid != "+layout.svelte") {
    return {
      information: {
        username: pid
      }
    };
  }
}
export {
  load
};
