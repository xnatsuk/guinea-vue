/* eslint-disable import/no-mutable-exports */
import type { MessageApi, MessageRenderMessage } from 'naive-ui'
import { NAlert } from 'naive-ui'

export let message: MessageApi
export const setMessage = (messageApi: MessageApi) => {
  message = messageApi
}

const renderMessage: MessageRenderMessage = (props) => {
  const { type } = props
  return h(NAlert,
    {
      closable: props.closable,
      onClose: props.onClose,
      type,
      title: type === 'success' ? 'Success' : 'Error',
      showIcon: true,
      bordered: true,
      style: {
        boxShadow: 'var(--n-box-shadow)',
        maxWidth: 'calc(100vw - 32px)',
        width: '480px',
      },
    },
    {
      default: () => props.content,
    },
  )
}

class Notify {
  success = (input: string) => {
    return message.success(input, {
      render: renderMessage,
      closable: true,
      type: 'success',
    })
  }

  error = (input: string) => {
    return message.error(input, {
      render: renderMessage,
      closable: true,
      type: 'error',
    })
  }
}

export const notify = new Notify()
