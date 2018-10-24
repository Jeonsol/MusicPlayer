<template>
  <div>
    <h1>Music Player</h1>
    <div class="music_player_wrap box">
      <p class="title">노래제목 - 가수명</p>
      <p class="time">00:00</p>
      <div class="button_area">
        <button type="button" class="button play">재생</button>
        <button type="button" class="button play">중지</button>
        <button type="button" class="button play">이전곡</button>
        <button type="button" class="button play">다음곡</button>
      </div>
    </div>
    <h1>Play List</h1>
    <ul class="list_set box">
      <li class="list"><a href="#" class="link" aria-selected="true">[<span class="time">00:00</span>] <span class="title">노래 제목</span> (<span class="artist">가수명</span>)</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  .box {
    padding: 10px;
    border: 1px solid #ccc;
  }
  .list {
    margin-left: 10px;
    .link {
      color: #000;
    }
  }
</style>
