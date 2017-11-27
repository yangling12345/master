<template>
  <div class="my">
		 <v-myheader></v-myheader>
		 <v-popular></v-popular>
		 <v-nav></v-nav>
		 <v-qiandao></v-qiandao>
		 <v-dingdan></v-dingdan>
		 <v-charen></v-charen>
		 <v-footer></v-footer>
  </div>
</template>

<script>
	import Myheader from './Myheader.vue'
	import Popular from './Popular.vue'
	import Nav from './Nav.vue'
	import Qiandao from './Qiandao.vue'
	import Dingdan from './Dingdan.vue'
	import Charen from './Charen.vue'
export default {
  name: 'My',
  data () {
    return {
    	
    }
  },
  components:{
  	'v-myheader':Myheader,
  	'v-popular':Popular,
  	'v-nav':Nav,
  	'v-qiandao':Qiandao,
  	'v-dingdan':Dingdan,
  	'v-charen':Charen
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
</style>
