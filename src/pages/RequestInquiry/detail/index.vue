<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <a-button type="danger">Danger</a-button>
    <a-button type="danger" @click="info">info</a-button>
    <a-button type="danger" @click="openNotification">openNotification</a-button>
    <a-button type="danger" @click="success">success</a-button>
    <a-button type="danger" @click="error">error</a-button>
    <a-button type="danger" @click="warning">warning</a-button>
    <a-button type="danger" @click="confirm">confirm</a-button>
    <a-button type="dashed" @click="showInfo">提示框</a-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'
import axios from '@/components/axios'
axios.get('/login').then((res) => {
  console.log(res)
})

Vue.component(Button.name, Button)

export default {
  name: 'login',
  data () {
    return {
      msg: 'requestInquiry-detail'
    }
  },
  methods: {
    showInfo () {
      this.$message.info('This is a normal message')
    },
    confirm () {
      this.$confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk () {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel () {}
      })
    },
    info () {
      const h = this.$createElement
      this.$info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...')
        ]),
        onOk () {}
      })
    },

    success () {
      this.$success({
        title: 'This is a success message',
        content: (  // JSX support
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        )
      })
    },

    error () {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...'
      })
    },

    warning () {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...'
      })
    },

    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
