<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NAvatar, NButton, NIcon } from 'naive-ui'
import type { IPet } from '@/types'

type RowData = IPet

const { result } = query.get()

const data = computed(() => result.value?.getPets as IPet[] ?? [])

const createColumns = ({
  edit, remove,
}: {
  edit: (rowData: RowData) => void
  remove: (rowData: RowData) => void
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
            alt: row.name,
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
      defaultSortOrder: false,
      sorter: 'default',
    },
    {
      title: 'Name',
      key: 'name',
      ellipsis: {
        tooltip: true,
      },
      defaultSortOrder: false,
      sorter: 'default',
    },
    {
      title: 'Nickname',
      key: 'nickname',
      ellipsis: {
        tooltip: true,
      },
      defaultSortOrder: false,
      sorter: 'default',
    },
    {
      title: 'Species',
      key: 'species',
      ellipsis: {
        tooltip: true,
      },
      defaultSortOrder: false,
      sorter: 'default',
    },
    {
      title: 'Gender',
      key: 'gender',
      width: 100,
      defaultFilterOptionValues: null,
      filterOptions: [
        {
          label: 'Male',
          value: 'Female', // has to be opposite of what you want to filter
        },
        {
          label: 'Female',
          value: 'Male',
        },
      ],
      filter(value, row) {
        return row.gender.indexOf(value.toString())
      },
    },
    {
      title: 'Birthday',
      key: 'birthday',
      width: 100,
    },
    {
      title: 'Death Date',
      key: 'deathDate',
      width: 100,
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
    {
      title: 'Remove',
      key: 'remove',
      width: 100,
      render(row) {
        return h(NButton,
          {
            onClick: () => remove(row),
          },
          {
            default: () => {
              return h(NIcon, {
                class: 'i-carbon-trash-can',
                size: 18,
                color: '#e88080',
              })
            },
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

  remove: (rowData: RowData) => {
    console.log('remove', rowData)
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
    />
  </n-space>

  <n-modal
    v-model:show="showModal"
    title="Edit Pet"
    preset="dialog"
    :mask-closable="true"
    :block-scroll="false"
    style="width: 600px"
  >
    <n-space justify="center">
      <PetForm
        v-bind="editRow"
        @form-submit="showModal = false"
      />
    </n-space>
  </n-modal>
</template>
