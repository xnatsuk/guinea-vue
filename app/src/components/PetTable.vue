<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NAvatar, NButton } from 'naive-ui'
import type { IPet } from '@/types'

interface RowData {
  _id?: string
  photo?: string
  name?: string
  nickname?: string
  species?: string
  gender?: string
  birthday?: Date | string
  deathDate?: Date | string
  favoriteFood?: string
  favoriteActivity?: string
  description?: string
}

const { result } = query.get()

const data = computed(() => result.value?.getPets as IPet[] ?? [])

const createColumns = ({
  edit,
}: {
  edit: (rowData: RowData) => void
}): DataTableColumns<RowData> => {
  return [
    {
      title: 'Photo',
      key: 'photo',
      width: 100,
      render(row) {
        return h(NAvatar,
          {
            round: true,
            size: 'large',
            src: row.photo,
            alt: row._id,
          },
        )
      },
    },
    {
      title: 'Id',
      key: '_id',
      ellipsis: {
        tooltip: true,
      },
    },
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Nickname',
      key: 'nickname',
    },
    {
      title: 'Species',
      key: 'species',
    },
    {
      title: 'Gender',
      key: 'gender',
      width: 100,
    },
    {
      title: 'Birthday',
      key: 'birthday',
      width: 150,
    },
    {
      title: 'Death Date',
      key: 'deathDate',
      width: 150,
    },
    {
      title: 'Edit Info',
      key: 'edit',
      width: 100,
      render(row) {
        return h(NButton,
          {
            onClick: () => edit(row),
          },
          {
            default: () => 'Edit',
          })
      },
    },
  ]
}

const showModal = ref<Boolean>(false)
const editRow = ref<RowData>()

const columns = createColumns({
  edit: (rowData: RowData) => {
    showModal.value = true
    editRow.value = rowData
  },
})
</script>

<template>
  <n-space vertical :size="14">
    <n-data-table
      :columns="columns"
      :data="data"
      :max-height="500"
      :scroll-x="1000"
      remote
    />
  </n-space>

  <n-modal
    v-model:show="showModal"
    title="Edit Pet"
    preset="dialog"
    :mask-closable="true"
    :block-scroll="false"
    bordered
    style="width: 600px"
  >
    <template #default>
      <n-space justify="center">
        <PetForm v-bind="editRow" />
      </n-space>
    </template>
  </n-modal>
</template>
