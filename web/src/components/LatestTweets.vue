<template>
	<div class="section-title text-center pb-5">

		<transition name="fade">
			<div>
				<h2 class="title text-uppercase">
					#<span class="primary-text">{{ tweet.hashtag }}</span>
				</h2>
				<p class="mb-2">
					{{ tweet.tweet }}
				</p>
			</div>
		</transition>


		<p class="mb-5">
			-- <a href="https://x.com/vic_vacendak" target="_blank">@vic_vacendak</a>
			<span class="mx-2">|</span>
			<a @click="getRandomTweet" class="refresh">Refresh</a>
		</p>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { tweets } from '../js/Tweets'
const tweet = ref('')

const getRandomTweet = () => {
	tweet.value = tweets[Math.floor(Math.random() * tweets.length)]
}

onMounted(() => {
	try {
		getRandomTweet()
	} catch (err) {
		console.log(`Mounting went sideways. Error: ${err}`);
	}
});
</script>

<style scoped>
.refresh {
	cursor: pointer;
	text-decoration: none;
}
</style>