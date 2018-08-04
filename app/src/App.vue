<template>
  <div>
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <button class="navbar-toggler" data-toggle="collapse" data-target="#Nav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="Nav">
      <div class="navbar-nav">

        <a href="/" class="nav-item nav-link">Home</a>
        <a href="/register" class="nav-item nav-link">Register</a>


      </div>
    </div>
  </nav>
<router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
