const uuid = require("uuid");

function StorageException(message) {
  this.message = message;
  this.name = "StorageException";
}

const DogPosts = {
  create: function(name, age, sex, enterDate) {
    const post = {
      id: uuid.v4(),
      name: name,
      age: age,
      sex: sex,
      enterDate: enterDate || Date.now()
    };
    this.posts.push(post);
    return post;
  },
  get: function(id = null) {
    if (id !== null) {
      return this.posts.find(post => post.id === id);
    }
    return this.posts.sort(function(a, b) {
      return b.publishDate - a.publishDate;
    });
  },
  delete: function(id) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
    }
  },
  update: function(updatedPost) {
    const { id } = updatedPost;
    const postIndex = this.posts.findIndex(post => post.id === updatedPost.id);
    if (postIndex === -1) {
      throw StorageException(
        `Can't update item \`${id}\` because doesn't exist.`
      );
    }
    this.posts[postIndex] = Object.assign(this.posts[postIndex], updatedPost);
    return this.posts[postIndex];
  }
};

function createDogPostsModel() {
  const storage = Object.create(DogPosts);
  storage.posts = [];
  return storage;
}

module.exports = { DogPosts: createDogPostsModel() };