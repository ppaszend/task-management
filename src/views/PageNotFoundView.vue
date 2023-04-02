<template>
<div class="pageNotFound">
  <img
    src="../assets/undraw/page-not-found.svg"
    alt="Page not found"
  />
  <span>Uppsss it looks that this page not exists</span>
</div>
</template>

<script>
export default {
  name: "PageNotFoundView"
}
</script>

<style lang="scss" scoped>
.pageNotFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-size: 2em;
  height: calc(100% - 200px);

  img {
    height: auto;
    width: 100%;
    max-width: 500px;
  }
}
</style>