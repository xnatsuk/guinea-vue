<script setup lang="ts">
const containerRef = ref<HTMLElement | undefined>(undefined)
const showModal = ref<boolean>(false)
const newName = ref<string>('')

function onClick() {
  showModal.value = true
}
</script>

<template>
  <div ref="containerRef" class="flex justify-end px-15">
    <n-affix
      :trigger-bottom="30"
      :listen-to="() => containerRef"
      position="fix"
    >
      <n-popover trigger="hover">
        <template #trigger>
          <n-button
            bordered
            circle
            text
            type="primary"
            style="font-size: 60px"
            @click="onClick"
          >
            <n-icon class="i-carbon-add-filled" aria-hidden="true" />
          </n-button>
        </template>
        <span>Click here to add a new pet!</span>
      </n-popover>
    </n-affix>
  </div>

  <n-modal
    v-model:show="showModal"
    title="New Pet Info"
    preset="dialog"
    :mask-closable="true"
    :block-scroll="false"
    style="width: 600px"
  >
    <n-space justify="center">
      <PetForm
        :name="newName"
        type="create"
        @form-submit="showModal = false"
      />
    </n-space>
  </n-modal>
</template>
