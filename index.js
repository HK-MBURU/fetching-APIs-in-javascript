// List
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.log('Error:', error);
  });


//   post 
const newPost = {
    title: 'New Post',
    body: 'This is the body of the new post.',
    userId: 1
  };
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
    .then(response => response.json())
    .then(createdPost => {
      console.log(createdPost);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  

    // update 
    const updatedPost = {
        title: 'Updated Post',
        body: 'This is the updated body of the post.',
        userId: 1
      };
      
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
      })
        .then(response => response.json())
        .then(updatedPost => {
          console.log(updatedPost);
        })
        .catch(error => {
          console.log('Error:', error);
        });
      

        // delete
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
          })
            .then(response => {
              if (response.ok) {
                console.log('Post deleted successfully.');
              } else {
                throw new Error('Failed to delete the post.');
              }
            })
            .catch(error => {
              console.log('Error:', error.message);
            });
          


//   filter
const userId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(filteredPosts => {
    console.log(filteredPosts);
  })
  .catch(error => {
    console.log('Error:', error);
  });


  
   