<template>
	<div>
		<br>
		<div class="columns">
		  <div class="column is-4" v-for="pb in phonebook">
		    <div class="box">
		      <p class="title is-5">Name: {{ pb.name }}</p>
		      <p class="subtitle"><strong>ID</strong>:{{ pb.age }} <br> <strong>Contact Number</strong>:{{ pb.contact }} </p>
				<a class="button is-link">Edit</a>
				<a class="button is-danger">Delete</a>
		    </div>
		  </div>
		</div>
	</div>
	
	
</template>
<script>
    import axios from 'axios';
	export default{
		data(){
			return{
				phonebook: []
			}
		},
		created(){
			this.getPhonebook();
		},
		methods:{
			getPhonebook(){
				axios.get(`https://10.0.222.41:84/tools/phonebook/get_phonebook.php`)
			    .then(response => {
			      this.phonebook = response.data
			    })
			    .catch(e => {
			      this.errors.push(e)
			    })
			}
		}
	}
</script>