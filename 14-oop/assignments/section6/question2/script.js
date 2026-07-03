function getUser(id, cb) {
    setTimeout(() => {
        cb({
            id: id,
            username: "@shobhit"
        });
    }, 1000);
}

function getUserPosts(userId, cb) {
    setTimeout(() => {
        cb([
            "Post 1",
            "Post 2",
            "Post 3"
        ]);
    }, 1000);
}

getUser("1234", function (user) {
    console.log(`Username: ${user.username}`);

    getUserPosts(user.id, function (posts) {
        console.log(posts);
    });
});