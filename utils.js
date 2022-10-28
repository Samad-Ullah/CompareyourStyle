export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  } else if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token") || "{}");
  } else {
    return false;
  }
};

export const authenticateJWT = (jwt) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", JSON.stringify(jwt));
  }
};
