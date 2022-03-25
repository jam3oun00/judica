<template>
  <div :id="groupId + '-' + item.id" class="accordion-item" :class="{ 'is-active': item.active }">
    <dt class="accordion-item-title border-b-2">
      <button @click="toggle" class="accordion-item-trigger py-3">
        <div class="accordion-item-title-text font-weight-bold">{{ item.title }}</div>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition name="accordion-item" @enter="startTransition" @after-enter="endTransition" @before-leave="startTransition" @after-leave="endTransition">
      <dd v-if="item.active" class="accordion-item-details white">
        <div v-html="item.details" class="accordion-item-details-inner white mb-5"></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['item', 'multiple', 'groupId'],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    endTransition(el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
