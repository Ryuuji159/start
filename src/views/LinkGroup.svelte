<script>
  import Link from "./Link.svelte";

  export let group = {
    name: '',
    links: []
  };
</script>

<span class="font-bold">{group.name}</span>
<div class="space-x-3">
  {#each group.links as link}
    <Link link="{link}"/>
  {/each}
</div>
