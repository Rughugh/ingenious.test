<template>
    <div class="container app-container">
      <h1>Timetable</h1>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/buslines">Bus lines</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stops">Stops</router-link>
        </li>
      </ul>
      <div class="page-content">
        <router-view />
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .app-container {
    padding: 20px;
    h1 {
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 28px;
    }
    .nav {
      padding: 0 24px;
      border-radius: 4px;
      background-color: #FFF;
    }
    .nav-item {

    }
    .nav-link {
      color: #000;
      padding: 1.5rem 1rem;
      &.router-link-active {
        border-bottom: 2px solid #0000FF;
      }
    }
    .page-content {
      margin: 10px 0;
    }
  }
</style>