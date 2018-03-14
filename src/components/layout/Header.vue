<template>
	<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
	  <div class="navbar-brand">
	    <a class="navbar-item" href="/">
	       PhoneBook
	    </a>
		  <router-link to='/home' active-class="is-active" class="navbar-item">Home</router-link>
	      <router-link to='/about' active-class="is-active" class="navbar-item">About</router-link>
	      <router-link to='/phonebook' active-class="is-active" class="navbar-item">Phonebook</router-link>

	    <div class="navbar-burger">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>
	</nav>
</template>