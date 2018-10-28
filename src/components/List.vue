<template>
  <li class="list"><a href="#" class="link" aria-selected="true">[<span class="time">{{ list.playTime }}</span>] <span class="title">{{ list.title }}</span> (<span class="artist"> {{ list.artist }}</span>)</a></li>
</template>

<script>
export default {
  name: 'List',
  props: ['list']
}
</script>

<style lang="scss" scoped>
  .list {
    margin-left: 10px;
    .link {
      color: #000;
    }
  }
</style>
