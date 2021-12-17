<script>
  import {fly} from 'svelte/transition';
  import CogIcon from "./CogIcon.svelte";

  let visible = false;

  function toggleVisible() {
    visible = !visible;
  }

  function hide() {
    visible = false;
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
  </div>
{/if}