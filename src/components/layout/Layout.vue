<template>
  <div>
    <Header />
    <Sidebar />
    <div class="content__admin">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
  }
}
</script>

<style>

</style>