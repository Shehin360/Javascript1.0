const profile = {
    profileName: "Shehin T Shaji",
    profileAge: 20,
    profileIsActive: true,
    profileFollowers: 200,
    profileFollowing: 150,
    profileBio: "A passionate learner and aspiring software developer.",
    profileInterests: ["Coding", "Reading", "Traveling"],
    isFollowing: true,
    noOfPosts: 20,

};
console.log("Profile Name:", profile.profileName);
console.log("Profile Age:", profile.profileAge);
console.log("Profile Is Active:", profile.profileIsActive ? "Yes" : "No");
console.log("Profile Followers:", profile.profileFollowers);
console.log("Profile Following:", profile.profileFollowing);
console.log("Profile Bio:", profile.profileBio);
console.log("Profile Interests:", profile.profileInterests.join(", "));
console.log("Is Following:", profile.isFollowing ? "Yes" : "No");
console.log("Number of Posts:", profile.noOfPosts);

typeof profile.profileName === "string" ? console.log("Profile Name is a string") : console.log("Profile Name is not a string");
