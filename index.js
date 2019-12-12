const button = document.getElementById("button");

const handlerClickButton = event => {
  const URL =
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86bj3y4kpecadb&redirect_uri=https://www.jobcastapp.com/om&scope=r_liteprofile%20r_emailaddress%20w_member_social";

  fetch(URL)
    .then(res => res.json())
    .then(data => console.log("data", data));
};

button.addEventListener("click", handlerClickButton);
