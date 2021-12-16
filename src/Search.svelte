<script>
  let search = '';

  function doNavigation(url) {
    if(
      url.slice(0,7) === 'http://' ||
      url.slice(0,8) === 'https://' ||
      url.slice(0,2) === '//'
    ){
      window.location.href=url;
    } else {
      window.location.href=`//${url}`;
    }
  }

  function doSearch(term) {
    doNavigation(`https://duckduckgo.com/?q=${term}`);
  }

  function submit(event) {
    if(event.key !== 'Enter') return;
    if(search.trim() === '') return;

    if(event.composed && event.ctrlKey){
      doNavigation(search);
    }else{
      doSearch(search);
    }
  }
</script>

<input
  type="search"
  autocomplete="false"
  bind:value={search}
  on:keyup|preventDefault={submit}
  class="border-2 border-black py-2 px-2"
/>