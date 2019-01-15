//Routes

const MAIN = "/";
const USER = "/user";
const VIDEO = "/video";

// global

const HOME = "/";
const JOIN = "/join";
const LOGOUT = "/logout";
const LOGIN = "/login";
const SEARCH = "/search";

//user

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//video

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
const VIDEO_DETAIL = "/:id";

const routes = {
  main: MAIN,
  user: USER,
  video: VIDEO,
  home: HOME,
  join: JOIN,
  logout: LOGOUT,
  login: LOGIN,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;
