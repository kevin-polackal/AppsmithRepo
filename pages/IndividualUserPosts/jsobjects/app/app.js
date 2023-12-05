export default {
	updatePosts() {
		// Grab user posts
		const user_posts = GrabPostsForUser.data;

    // Update the list in the store
    storeValue('UserPosts', user_posts);
	}
}