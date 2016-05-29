# Phase 5: Posts and Garbage Collection

## Rails
### Models
* Post

### Controllers
* Api::PostsController (create, destroy, index, update)

### Views
* posts/index.json.jbuilder

## Flux
### Views (React Components)
* PostsIndex
  - PostIndexItem
* PostShow
* PostForm

### Stores
* Post

### Actions
* ApiActions.receiveAllPosts -> triggered by ApiUtil
* ApiActions.receiveSinglePost
* ApiActions.deletePost
* PostActions.fetchAllPosts -> triggers ApiUtil
* PostActions.fetchSinglePost
* PostActions.createPost
* PostActions.updatePost
* PostActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.updatePost
* ApiUtil.destroyPost

## Gems/Libraries
