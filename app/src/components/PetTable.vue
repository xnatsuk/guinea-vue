<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NAvatar, NButton, NIcon, useDialog, useMessage } from 'naive-ui'
import type { IPet } from '@/types'

type RowData = IPet

const { result } = query.get()

const data = computed(() => result.value?.getPets as IPet[] ?? [])

const dialog = useDialog()
setMessage(useMessage())

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
            onClick: () => dialog.warning({
              title: 'Confirm Delete',
              content: 'Are you sure you want to delete this pet? This action cannot be undone.',
              negativeText: 'Cancel',
              positiveText: 'Confirm',
              onPositiveClick: () => remove(row),
            }),
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

const showModal = ref<boolean>(false)
const editRow = ref<RowData>()

const columns = createColumns({
  edit: (rowData: RowData) => {
    showModal.value = true
    editRow.value = rowData
  },

  remove: (rowData: RowData) => {
    try {
      const { deletePet } = mutation.delete(rowData.name)
      deletePet()
      notify.success('Pet deleted successfully')

      setTimeout(() => {
        router.go(0)
      }, 2000)
    }
    catch (error) {
      notify.error(`Error deleting pet: ${rowData.name}`)
    }
  },
})
</script>

<template>
  <n-space vertical :size="14">
    <n-data-table
      :columns="columns"
      :data="data"
      :max-height="800"
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
        type="update"
        @form-submit="showModal = false"
      />
    </n-space>
  </n-modal>
</template>
