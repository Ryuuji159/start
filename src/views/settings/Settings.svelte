<script>
  import {fly} from 'svelte/transition';
  import CogIcon from "./CogIcon.svelte";
  import {groups} from "../../stores/store";

  let visible = true;

  function toggleVisible() {
    visible = !visible;
  }

</script>

<CogIcon
  className={`absolute left-1 top-1 z-20
  transition-colors hover:text-gray-700
  ${visible ? 'text-gray-700' : 'text-gray-300'}
  cursor-pointer `}
  on:click={toggleVisible}
/>

{#if visible}
  <div
    class={`absolute left-0 z-10
    w-1/3 xl:w-1/4 h-screen p-2
    flex flex-col items-start
    border-r-2 border-black bg-white`}
    transition:fly={{x:-200, duration:300}}
  >
    <h1 class="text-3xl absolute top-0 self-end">Settings</h1>

    <div class="mt-10 overflow-y-auto">
      <ul class="space-y-2">
        {#each $groups as group}
          <li>
            <span>{group.name}</span>
            {#if group.links.length > 0}
              {#each group.links as link}
                <div class="space-y-2 py-4">
                  <input
                    type="text"
                    class="ml-2 ring-2 ring-black px-2"
                    value="{link.name}"
                  >
                  <input
                    type="text"
                    class="ml-2 ring-2 ring-black px-2"
                    value="{link.href}"
                  >
                </div>
              {/each}
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}