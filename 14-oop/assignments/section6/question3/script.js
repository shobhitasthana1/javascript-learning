// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

function loginUser(cb) {
    setTimeout(() => {
        cb({
            id: 101,
            username: "@shobhit"
        });
    }, 1000);
}

function fetchPermissions(userId, cb) {
    setTimeout(() => {
        cb([
            "read",
            "write",
            "delete"
        ]);
    }, 1000);
}

function loadDashboard(permissions, cb) {
    setTimeout(() => {
        cb("Dashboard loaded");
    }, 1000);
}

loginUser(function (User) {
    console.log("User: " + User.username);

    fetchPermissions(User.id, function (permissions) {
        console.log("Permissions:", permissions);

        loadDashboard(permissions, function (msg) {
            console.log(msg);
        });
    });
});