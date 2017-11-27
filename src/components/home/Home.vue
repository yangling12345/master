<template>
  <div class="home">
   	<v-header></v-header>
   	<v-banner></v-banner>
   	<v-navigation></v-navigation>
   	<v-time></v-time>
   	<v-timelimit></v-timelimit>
   	<v-new></v-new>
   	<v-hotreview></v-hotreview>
   	<v-top></v-top>
   	<v-footer></v-footer>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import New from './New.vue'
import Hotreview from './hotreview.vue'
import Top from './Top.vue'
import Footer from '../common/Footer.vue'
import Time from './Time.vue'
import Timelimit from './Timelimit.vue'

export default {
  name: 'Home',
  components:{
  	'v-navigation':Navigation,
  	'v-new':New,
  	'v-hotreview':Hotreview,
  	'v-top':Top,
  	'v-footer':Footer,
	  'v-time':Time,
	  'v-timelimit':Timelimit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
