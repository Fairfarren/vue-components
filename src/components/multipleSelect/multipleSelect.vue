<template>
  <div class="multiselectBox">
    <ul class="theInput" @click.stop="chioseInput">
      <li v-for="(data, index) in list" :key="index">
        <span>{{data}}</span>
        <span @click.stop="deleteThis(index)">x</span>
      </li>
      <li class="inputTExt" v-show="inputShow">
        <input
          :class="redBorder"
          type="text"
          :id="theKey"
          v-model="text"
          @blur="inputBlue"
          @keyup.enter="enterKeyUp"
        >
        <span v-show="!addFlg">{{errText}}</span>
      </li>
    </ul>
    <!-- <ul class="theList">
      <li v-for="(data, index) in ajaxList" :key="index">{{data}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  props: ['theKey', 'reg', 'ajaxList'],
  data () {
    return {
      list: [],
      inputShow: false,
      addFlg: false,
      text: '',
      redBorder: ''
    }
  },
  computed: {
    errText () {
      if (this.text.trim() && this.reg) {
        return this.reg.text
      } else {
        return ''
      }
    }
  },
  methods: {
    deleteThis (index) {
      this.list.splice(index, 1)
    },
    chioseInput () {
      this.inputShow = true
      const theInput = document.getElementById(this.theKey)
      setTimeout(() => {
        theInput.focus()
      }, 100)
    },
    inputBlue () {
      if (this.text.trim() && this.addFlg) {
        this.list.push(this.text)
        this.text = ''
      }
      this.inputShow = false
    },
    enterKeyUp () {
      new Promise((resolve) => {
        this.inputBlue()
        resolve()
      }).then(() => {
        this.chioseInput()
      })
    }
  },
  mounted () {
    this.addFlg = !this.reg && true
  },
  watch: {
    'text' (value) {
      if (!this.reg) return
      if (!value) {
        this.addFlg = false
        this.redBorder = ''
      } else if (this.reg.reg.test(value)) {
        this.addFlg = true
        this.redBorder = ''
      } else {
        this.addFlg = false
        this.redBorder = 'redBorder'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
    transition: all 0.3s;
  }
  .multiselectBox {
    border: 1px solid black;
    width: 300px;
    cursor: text;
    position: relative;
    border: 1px solid #ececec;
    border-radius: 2px;
  }
  .theInput {
    padding: 5px;
    min-height: 37px;
    box-sizing: border-box;
    padding: {
      bottom: 0;
    }
    display: flex;
    flex-wrap: wrap;
    >li {
      padding: 5px 10px;
      color: #333;
      font-size: 12px;
      margin: {
        right: 10px;
        bottom: 5px;
      }
      background: {
        color: #f3f3f3;
      }
      >span:first-child {
        cursor: pointer;
        margin: {
          right: 5px;
        }
      }
      >span:last-child {
        cursor: pointer;
        font-weight: bold;
      }
    }
    >.inputTExt {
      padding: 0;
      background: {
        color: transparent;
      }
      >input {
        outline: 1px solid #27b3fe;
        border: 0;
        padding: 5px;
        transition: all 0.3s;
      }
      >.redBorder {
        outline: 1px solid #FF6159;
        color: #FF6159;
      }
      >span {
        color: #FF6159;
      }
    }
  }
  .theList {
    width: 100%;
    position: absolute;
    left: -1px;
    border: 1px solid #ececec;
    margin: {
      top: 10px;
    }
  }
</style>
