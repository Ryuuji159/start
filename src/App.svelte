<script>
  import Search from "./Search.svelte";
  import LinkGroup from "./LinkGroup.svelte";
  import Container from "./Container.svelte";

  import {groups} from "./store";
</script>

<Container>
  <Search slot="search"/>

  <svelte:fragment slot="groups">
    {#each $groups as group}
      <LinkGroup group="{group}"/>
    {/each}
  </svelte:fragment>

</Container>