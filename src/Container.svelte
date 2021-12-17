<div class="h-screen w-screen flex items-center justify-center">
  <slot name="settings"/>
  <div class="flex flex-col w-full max-w-screen-md p-2 space-y-2">
    <slot name="search"/>
    <div class="grid grid-cols-[10ch_auto]">
      <slot name="groups"/>
    </div>
  </div>
</div>