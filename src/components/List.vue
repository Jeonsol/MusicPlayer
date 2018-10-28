<template>
  <li class="list"><a href="#" class="link" aria-selected="true">[<span class="time">00:00</span>] <span class="title">노래 제목</span> (<span class="artist">가수명</span>)</a></li>
</template>

<script>
export default {
  name: 'List'
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
